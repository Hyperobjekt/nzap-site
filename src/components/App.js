import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./static/Landing";
import TheReportPage from "./static/TheReport";
import FactSheetPage from "./static/FactSheet";
import MediaPage from "./static/Media";
import AboutPage from "./static/About";

import Header from "./_global/Header";
import Footer from "./_global/Footer";
import FourOhFour from "./FourOhFour";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/the-report" component={TheReportPage} />
        <Route path="/fact-sheet" component={FactSheetPage} />
        <Route path="/media" component={MediaPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={FourOhFour} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Footer />
    </>
  );
}

export default App;
