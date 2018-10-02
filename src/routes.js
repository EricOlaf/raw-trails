import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Insta from "./components/Insta/Insta";
import PlanTrip from "./components/PlanTrip/PlanTrip";
import QuizOne from "./components/Quiz/QuizOne/QuizOne";
import QuizTwo from "./components/Quiz/QuizTwo/Quiztwo";
import QuizThree from "./components/Quiz/QuizThree/QuizThree";
import Reviews from "./components/Reviews/Reviews";
import Header from "./components/Header/Header";
import Admin from "./components/Admin/Admin";
import VideoPage from "./components/VideoPage/VideoPage";
import PastTripMoab from "./components/PastTrip/PastTripMoab/PastTripMoab";
import PastTripYosemite from "./components/PastTrip/PastTripYosemite/PastTripYosemite";
import PastTripHava from "./components/PastTrip/PastTripHava/PastTripHava";
import PastTripCour from "./components/PastTrip/PastTripCour/PastTripCour";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={About} path="/about" />
    {/* <Route component={Insta} path="/insta" /> */}
    <Route component={PlanTrip} path="/plantrip" />
    <Route component={QuizOne} path="/quizone" />
    <Route component={QuizTwo} path="/quiztwo" />
    <Route component={QuizThree} path="/quizthree" />
    <Route component={Reviews} path="/reviews" />
    <Route component={Header} path="/header" />
    <Route component={Admin} path="/admin" />
    <Route component={VideoPage} path="/videopage" />
    <Route component={PastTripMoab} path="/ptmoab" />
    <Route component={PastTripYosemite} path="/ptyosemite" />
    <Route component={PastTripHava} path="/pthava" />
    <Route component={PastTripCour} path="/ptcour" />
    <Route
      path="/instagram"
      component={() =>
        (window.location = "https://www.instagram.com/rawtrails/")
      }
    />
  </Switch>
);
