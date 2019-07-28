package models

import play.api.libs.json.{Format, Json}

case class Statistics(timestamp: Long, score: Float)

object Statistics {
    implicit val format: Format[Statistics] = Json.format[Statistics]
}

