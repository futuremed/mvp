package models

import models.SexType.SexType
import play.api.libs.json.{Format, Json}

case class Patient(id: Long,
                   firstName: String,
                   lastName: String,
                   sex: SexType,
                   age: Int)
    extends Person(firstName, lastName, sex)

object Patient {
    implicit val format: Format[Patient] = Json.format[Patient]
}
