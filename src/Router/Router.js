import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home';
import Skills from '../Skills';
import Projects from '../Projects';
import {Grid} from 'react-bootstrap';
import styled from 'styled-components';
import {Header} from '../components'

const Wrapper = styled.div`
  height: 100%;
`;


const Container =props => (
  <Wrapper>
    <Header />
    {props.children}
  </Wrapper>
)

export default class Router extends Component {
  render() {
    return (
     <BrowserRouter>
     <Container>
       <Grid fluid>


     <Route
       path='/'>
       <Redirect to='/home'/>
     </Route>

      <Route
       exact
       path='/home'
       render={props => (<Home {...props} />)}>
      </Route>
      <Route
       exact
       path='/projects'
       render={props => (<Skills {...props} />)}>
      </Route>
      <Route
       exact
       path='/skills'
       render={props => (<Projects {...props} />)}>
      </Route>
      </Grid>
      </Container>
     </BrowserRouter>
    )
  }
}
