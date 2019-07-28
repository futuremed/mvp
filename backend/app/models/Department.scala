package models

import play.api.libs.json.{Format, Json}

case class Department(name: String,
                      doctorNumbers: Int,
                      doctors: List[DoctorStatistic],
                      score: Float,
                      statistics: List[Statistics]) extends BaseModel


object Department {
    implicit val format: Format[Department] = Json.format[Department]
}
