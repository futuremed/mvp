package models

import play.api.libs.json.{Format, Reads, Writes}

import scala.util.Try

object SexType extends Enumeration {
    type SexType = Value

    val MALE, FEMALE = Value

    implicit val format: Format[SexType] = Format(Reads.enumNameReads(this), Writes.enumNameWrites)

    def find(code: String): Option[SexType] =
        Try {
            SexType.withName(code)
        }.toOption

}