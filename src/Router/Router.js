import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home";
import Skills from "../Skills";
import Projects from "../Projects";
import Error from "../Error";
import Dogs from "../dogs";
import About from "../About";
import Birthday from "../Birthday";
import styled from "styled-components";
import Header from "../Header"
import Footer from '../components/Footer';
import { Grid, Row as BootRow, Col } from "react-bootstrap";
const Main = styled.main`
    background-color: #313340;
`;



export default class Router extends Component {
  render() {
    return (
        <BrowserRouter basename={process.env.REACT_APP_PATH}>
        <>

        <Main>
  
          <Switch>
            <Route exact path="/home" render={props => <Home {...props} />} />
            <Route exact path="/home" render={props => <Home {...props} />} />
            <Route
              exact
              path="/projects"
              render={props => <Projects {...props} />}
            />
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
            <Route exact path="/dogs" render={props => <Dogs {...props} />} />
            <Route
              exact
              path="/page/skills"
              render={props => <Skills {...props} />}
            />
            <Route exact path="/about" render={props => <About {...props} />} />
            <Route
              exact
              path="/Jimmy/Birthday"
              render={props => (
                <Birthday {...props} person={"Jimmy"} day={27} month={8} />
              )}
            />
            <Route
              exact
              path="/Maddie/Birthday"
              render={props => (
                <Birthday {...props} person={"Maddie"} day={12} month={3} />
              )}
            />
            <Route
              exact
              path="/Liang/Birthday"
              render={props => (
                <Birthday {...props} person={"Liang"} day={26} month={5} />
              )}
            />
            <Route
              exact
              path="/Ryan/Birthday"
              render={props => (
                <Birthday {...props} person={"Ryan"} day={12} month={3} />
              )}
            />
            <Route exact path="/404" render={props => <Error {...props} />} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route>
              <Redirect to="/404" />
            </Route>
          </Switch>    
     
            </Main>
          <Footer></Footer>
          </>
        </BrowserRouter>



    );
  }
}
