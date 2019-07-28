package services

import javax.inject.Singleton
import models.{DoctorStatistic, SexType, Statistics}

@Singleton
class InMemoryDbService {

    private val hardcodedHistoryStatistic = List(
        Statistics(1514764800, 7.8f),
        Statistics(1517443200, 8.1f),
        Statistics(1519862400, 8.3f),
        Statistics(1522540800, 8.1f),
        Statistics(1525132800, 8.7f),
        Statistics(1527811200, 9.0f),
        Statistics(1533081600, 9.1f),
        Statistics(1535760000, 7.6f),
        Statistics(1538352000, 7.7f),
        Statistics(1541030400, 7.6f),
        Statistics(1543622400, 7.9f),
        Statistics(1546300800, 8.3f),
        Statistics(1548979200, 8.1f),
        Statistics(1548979200, 8.2f),
        Statistics(1551398400, 8.3f),
        Statistics(1554076800, 8.5f),
        Statistics(1559347200, 8.6f),
        Statistics(1561939200, 8.8f),
    )

    private val hardcodedHistoryForDoctorStatistic = List(
        Statistics(1514764800, 8.8f),
        Statistics(1517443200, 8.1f),
        Statistics(1519862400, 9.0f),
        Statistics(1522540800, 8.3f),
        Statistics(1525132800, 9.3f),
        Statistics(1527811200, 9.2f),
        Statistics(1533081600, 9.1f),
        Statistics(1535760000, 9.3f),
        Statistics(1538352000, 9.3f),
        Statistics(1541030400, 8.2f),
        Statistics(1543622400, 8.9f),
        Statistics(1546300800, 9.3f),
        Statistics(1548979200, 9.1f),
        Statistics(1548979200, 9.2f),
        Statistics(1551398400, 9.3f),
        Statistics(1554076800, 8.85f),
        Statistics(1559347200, 8.7f),
        Statistics(1561939200, 8.8f),
    )

    private val hardcodedDoctors = List(
        DoctorStatistic(1L, "Иванов", "Иван", 5, SexType.MALE, 7.8f, List()),
        DoctorStatistic(2L, "Петров", "Сергей", 10, SexType.MALE, 8.9f, hardcodedHistoryForDoctorStatistic),
        DoctorStatistic(3L, "Раздолькин", "Никита", 7, SexType.MALE, 7.8f, List()),
    )


    def historyScoreForCompany = hardcodedHistoryStatistic


    def doctors = hardcodedDoctors

    def getDoctorById(doctorId: Long) = hardcodedDoctors.find(_.id == doctorId).get
}
