package models

import play.api.libs.json.{Format, Json}

case class Clinic(name: String,
                  location: String,
                  doctorNumbers: Int,
                  departments: Int,
                  doctors: List[DoctorStatistic],
                  score: Float,
                  statistics: List[Statistics]) extends BaseModel

object Clinic {
    implicit val format: Format[Clinic] = Json.format[Clinic]
}
