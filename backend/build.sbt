
name := "futuremed"

version := "1.0"

scalaVersion := "2.12.8"

lazy val `futuremed` = Project(id = "futuremed", base = file("."))
    .enablePlugins(PlayScala)
    .settings(
        libraryDependencies ++= Seq(
            ehcache,
            ws,
            specs2 % Test,
            guice,
            "com.h2database" % "h2" % "1.4.192",
            "com.typesafe.play" %% "play-slick" % "3.0.0",
            "com.typesafe.play" %% "play-slick-evolutions" % "3.0.0",
            "com.typesafe.slick" %% "slick" % "3.2.0"
        )
    )
    .dependsOn(
    )


      