package models

import models.SexType.SexType
import play.api.libs.json.{Format, Json}

case class Doctor(id:Long,
                  firstName: String,
                  lastName: String,
                  sex: SexType)
    extends Person (firstName, lastName, sex)

object Doctor {
    implicit val format: Format[Doctor] = Json.format[Doctor]
}