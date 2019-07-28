package services

import com.google.inject.Inject
import javax.inject.Singleton
import models.{Appointment, Clinic, DoctorStatistic}

@Singleton
class ScoreService @Inject()(appointmentService: AppointmentService,
                             historyScoreService: InMemoryDbService,
                             inMemoryDbService: InMemoryDbService) {

    private val initScore = 10

    def scoreForClinic: Clinic = {

        val appointments = initScore + appointmentService.getAppointments().values.size
        val alertAppointment = appointmentService.getAlertAppointments().values.size

        val score = (appointments - alertAppointment) / appointments

        def scoreDoctors = {

            val appointments = 9 + appointmentService.getAppointments().values.size
            val alertAppointments: List[Appointment] = appointmentService.getAlertAppointments().values.toList.flatten
            val score = (appointments - alertAppointments.size) / appointments


            val selectedDoctor = inMemoryDbService.doctors.head
            val hardcodedDoctors = inMemoryDbService.doctors.tail
            if (alertAppointments.nonEmpty) {
                selectedDoctor.copy(score = score, alertAppointments = alertAppointments) :: hardcodedDoctors
            } else {
                selectedDoctor :: hardcodedDoctors
            }
        }


        Clinic("Городская Поликлиника №5",
            "107045, Москва, Даев пер. д.3, стр.1 ",
            40,
            5,
            scoreDoctors,
            score,
            historyScoreService.historyScoreForCompany
        )
    }

    def scoreByDoctor(doctorId: Long): DoctorStatistic = {
        val appointments = initScore + appointmentService.getAppointments().values.size
        val alertAppointment = appointmentService.getAlertAppointments().values.size
        val score = (appointments - alertAppointment) / appointments


        val doctor = inMemoryDbService.getDoctorById(doctorId)


        doctor.copy(score = score)
    }

}
