package services

import com.google.inject.Inject
import javax.inject.Singleton
import models.{Clinic, DoctorStatistic}

@Singleton
class ScoreService @Inject()(appointmentService: AppointmentService,
                             historyScoreService: InMemoryDbService,
                             inMemoryDbService: InMemoryDbService) {

    private val initScore = 10

    def scoreForClinic: Clinic = {

        val appointments = initScore + appointmentService.getAppointments().values.size
        val alertAppointment = appointmentService.getAlertAppointments().values.size

        val score = (appointments - alertAppointment) / appointments

        Clinic("Городская Поликлиника №5",
            "107045, Москва, Даев пер. д.3, стр.1 ",
            40,
            5,
            inMemoryDbService.doctors,
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

    def scoreForClinic2: Float = {
        val appointmentSize = appointmentService.getAppointments().values.size
        val alertAppointmentSize = appointmentService.getAlertAppointments().keySet.size

        (appointmentSize - alertAppointmentSize) / appointmentSize
    }

    def scoreByDoctor2(doctorId: Long): Float = {
        val appointmentSize = appointmentService.getAppointments().values.size
        val alertAppointmentSize = appointmentService.getAlertAppointments().keySet.size

        (appointmentSize - alertAppointmentSize) / appointmentSize
    }

}
