import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home";
import Skills from "../Skills";
import Projects from "../Projects";
import { Grid } from "react-bootstrap";
import styled from "styled-components";
import { Header, Footer } from "../components";

const Wrapper = styled.div`
  height: 100%;
`;

const Container = props => (
  <Wrapper>
    <Header />

    {props.children}
    <Footer />
  </Wrapper>
);

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
            <Route>
              <Redirect to="/home" />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
