package controllers

import akka.actor.ActorSystem
import com.google.inject.Inject
import models.Appointment
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, Action, AnyContent, ControllerComponents}
import services.{AppointmentService, ScoreService}

import scala.concurrent.{ExecutionContext, Future}

class StatisticController @Inject()(appointmentService: AppointmentService,
                                    scoreService: ScoreService,
                                    controllerComponents: ControllerComponents)
                                   (implicit executionContext: ExecutionContext, actorSystem: ActorSystem)

    extends AbstractController(controllerComponents) {


    def createAppointment = Action.async {
        implicit rc =>

            Future {
                rc.body.asJson.flatMap(_.asOpt[Appointment]).foreach(appointmentService.addAppoint)

                Ok
            }
    }

    def scoreForClinic: Action[AnyContent] = Action.async {

        Future {

            Ok(Json.toJson(scoreService.scoreForClinic))
        }
    }

    def scoreForDoctor(doctorId: Long) = Action.async {
        implicit rc =>

            Future {
                Ok(Json.toJson(scoreService.scoreByDoctor(doctorId)))
            }
    }

}



