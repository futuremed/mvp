package services

import javax.inject.Singleton
import models.Appointment

import scala.collection.mutable

@Singleton
class AppointmentService {

    private val currentAppointments = mutable.Map.empty[Long, List[Appointment]]
    private val alertAppointments = mutable.Map.empty[Long, List[Appointment]]


    def addAppoint(appointment: Appointment): Unit = {
        val patientId = appointment.patient.id

        currentAppointments.get(patientId) match {
            case Some(xs) => currentAppointments(patientId) = List(xs.head, appointment)
                checkAppointsByUser(xs.head, appointment)

            case None => currentAppointments(patientId) = List(appointment)
        }
    }

    def getAlertAppointments() = alertAppointments

    def getAppointments() = currentAppointments

    private def checkAppointsByUser(appointmentBefore: Appointment, appointmentAfter: Appointment): Unit = {


        val patientId = appointmentBefore.patient.id

        def isSameConclusionCode = appointmentBefore.conclusionCode == appointmentAfter.conclusionCode

        def isSameComplaints = appointmentBefore.complaints == appointmentAfter.complaints

        def isSameRecommendations = appointmentBefore.recommendations == appointmentAfter.recommendations

        if (!isSameConclusionCode && isSameComplaints && isSameRecommendations) {
            alertAppointments.put(patientId, List(appointmentBefore, appointmentAfter))

        } else if (isSameConclusionCode && isSameComplaints && !isSameRecommendations) {
            alertAppointments.put(patientId, List(appointmentBefore, appointmentAfter))

        } else {
            alertAppointments.remove(patientId)
        }


    }


}
