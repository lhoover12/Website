import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home";
import Skills from "../Skills";
import Projects from "../Projects";
import styled from "styled-components";
import { Header, Footer } from "../components";

import About from "../About";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename={"/page"}>
          <Switch>
            <Route exact path="/home" render={props => <Home {...props} />} />
            <Route
              exact
              path="/projects"
              render={props => <Projects {...props} />}
            />
            <Route
              exact
              path="/skills"
              render={props => <Skills {...props} />}
            />
            <Route exact path="/about" render={props => <About {...props} />} />
            <Route>
              <Redirect to="/home" />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
