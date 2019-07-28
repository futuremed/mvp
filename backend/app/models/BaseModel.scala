package models

trait BaseModel {

    def score: Float

    def statistics: List[Statistics]
}
