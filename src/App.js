import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

import Header from "./components/Header/Header";
import Bottom from "./components/Bottom/Bottom";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <ScrollToTop>
            <div className="App">
              <Header />
              {routes}
              <Bottom />
            </div>
          </ScrollToTop>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
