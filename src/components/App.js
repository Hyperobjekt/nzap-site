import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./static/Landing";
import TheReportPage from "./static/TheReport";
import FactSheetPage from "./static/FactSheet";
import MediaPage from "./static/Media";
import AboutPage from "./static/About";
import PublicationsPage from "./static/Publications";

import Header from "./_global/Header";
import Footer from "./_global/Footer";
import FourOhFour from "./FourOhFour";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 700, // values from 0 to 3000, with step 50ms
  offset: 0,
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
});

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
        <Route path="/publications" component={PublicationsPage} />
        <Route component={FourOhFour} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Footer />
    </>
  );
}

export default App;
