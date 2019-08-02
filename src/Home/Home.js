import React, { Component } from 'react';
import styled from 'styled-components';

import { Col, Row as BootRow, Grid } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Cover from './cover'
//https://color.adobe.com/trends/Graphic-design?page=2
const HomePage = styled.div`
&&&{
  text-align: center;
  
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #313340;
  color: #F2C36B;
  linear-gradient(to right, #0367a6 0, #a2cdf2 100%);

a{
  :hover{
color: #F2921D;
  }
}
}


`;
const Heading = styled.h1`
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  font-size: calc(4vw + 1em);
  font-weight: 700;
  letter-spacing: 5px;
`;
const Subtext = styled.p`
  width: 100%;
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  font-size: calc(1.5vw + 1em);

`;
const Text = styled.p`
  width: 100%;
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  font-size: calc(1.5vw + .5em);
  margin-bottom: 5em;
 
`;
const Border = styled.div`
  border: solid 1px #f2c36b;
  height: 0;
  width: 100%;

`;
const Container =styled(Grid)
`
margin-top: 75vh;
min-height: 100vh;
`
const Nav = styled(Link)`
margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  color: #bfcfd9;
  font-size: calc(1.5vw + 1em);
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
  }
  render() {
    return (
      <HomePage>
           <Cover>
            </Cover>
            <Container>
        <BootRow>
          <Col md={12}>
            <Heading>Lukas Hoover</Heading>
       
          </Col>
        
          <Col md={12}>
            <Subtext>Developer</Subtext>
            <Text>The best dang web developer this side of the Mississippi.</Text>
          </Col>
          <Col md={3}>
            <Nav to={'/projects'}>Project</Nav>
          </Col>
          <Col md={1} style={{margin: 'auto'}}>
            <Border />
          </Col>
          <Col md={4}>
            <Nav to={'/skills'}>Skills</Nav>
          </Col>
          <Col md={1} style={{margin: 'auto'}}>
            <Border />
          </Col>
          <Col md={3}>
            <Nav to={'/'}>About Me</Nav>
          </Col>
        </BootRow>
        </Container>
      </HomePage>
    );
  }
}
