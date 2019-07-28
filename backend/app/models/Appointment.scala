package models

import play.api.libs.json.{Format, Json}

case class Appointment(time:Long,
                       doctor: Doctor,
                       patient: Patient,
                       conclusionCode:Int,
                       complaints:Set[Int]
                      )

object Appointment {
    implicit val format: Format[Appointment] = Json.format[Appointment]
}


