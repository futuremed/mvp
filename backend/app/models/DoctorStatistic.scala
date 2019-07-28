package models

import models.SexType.SexType
import play.api.libs.json.{Format, Json}

case class DoctorStatistic(id: Long,
                           firstName: String,
                           lastName: String,
                           experience: Int,
                           sex: SexType,
                           score: Float,
                           alertAppointments: List[Appointment],
                           statistics: List[Statistics]) extends BaseModel

object DoctorStatistic {
    implicit val format: Format[DoctorStatistic] = Json.format[DoctorStatistic]
}
