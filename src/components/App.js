import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";

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
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/explore" component={ExploreLoader} /> */}
        <Route component={FourOhFour} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Footer />
    </>
  );
}

export default App;
