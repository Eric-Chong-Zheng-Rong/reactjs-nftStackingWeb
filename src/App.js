import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import i18n from "./locales/i18n.js";
import { withNamespaces } from "react-i18next";

// react-router-dom
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header/Header";
import StackView from "./components/stack/StackView";

class App extends Component {
  render() {
    // const { t } = this.props;

    return (
      <BrowserRouter basename="reactjs-nftStackingWeb">
        <header>
          <Header />
        </header>

        <Switch>
          <Route path="/v1/stack/view" component={StackView} />

          <Redirect to="/v1/stack/view" component={StackView} />
        </Switch>

        {/* footer bar */}
        <footer>
          {/* <Footer /> */}
        </footer>
      </BrowserRouter>
    );
  }
}

export default withNamespaces()(App);
