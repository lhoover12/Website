import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home";
import Skills from "../Skills";
import Projects from "../Projects";
import Error from "../Error";

import About from "../About";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename={"/page"}>
          <Switch>
            <Route
              exact
              path="/page/home"
              render={props => <Home {...props} />}
            />
            <Route exact path="/home" render={props => <Home {...props} />} />
            <Route
              exact
              path="/projects"
              render={props => <Projects {...props} />}
            />
            <Route
              exact
              path="/page/projects"
              render={props => <Projects {...props} />}
            />
            <Route
              exact
              path="/skills"
              render={props => <Skills {...props} />}
            />
            <Route
              exact
              path="/page/skills"
              render={props => <Skills {...props} />}
            />
            <Route exact path="/about" render={props => <About {...props} />} />
            <Route
              exact
              path="/page/about"
              render={props => <About {...props} />}
            />
            <Route exact path="/404" render={props => <Error {...props} />} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route>
              <Redirect to="/404" />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
