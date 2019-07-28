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
            case Some(xs) => currentAppointments(patientId) = xs :+ appointment
                checkAppointsByUser(xs.last, appointment)

            case None => currentAppointments(patientId) = List(appointment)
        }
    }

    def getAlertAppointments() = alertAppointments

    def getAppointments() = currentAppointments

    private def checkAppointsByUser(appointmentBefore: Appointment, appointmentAfter: Appointment): Unit = {


        val patientId = appointmentBefore.patient.id

        def isSameConclusionCode = appointmentBefore.conclusionCode == appointmentAfter.conclusionCode

        def isSameComplaints = appointmentBefore.complaints == appointmentAfter.complaints

        if (!isSameConclusionCode && isSameComplaints) {

            alertAppointments.get(patientId) match {
                case Some(xs) => currentAppointments(patientId) = xs ++ List(appointmentBefore, appointmentAfter)
                case None => currentAppointments(patientId) = List(appointmentBefore, appointmentAfter)
            }
        }


    }


}
