import React, { Component } from 'react';
import styled from 'styled-components';

import { Col, Row as BootRow } from 'react-bootstrap';

const HomePage = styled.div`
  text-align: center;
  
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #313340;
  color: #F2C36B;
  linear-gradient(to right, #0367a6 0, #a2cdf2 100%);
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
  margin-bottom: 50px;
`;
const Border = styled.div`
border: solid 1px #F2C36B;
height: 0;
width: 100%;
    

    margin-top: 1.2em;
`;
const Nav = styled.p`
  margin-bottom: 50px;
  width: 100%;
  color: #BFCFD9;
  font-size: calc(1.5vw + 1em);`;

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
        <BootRow>
          <Col md={12}>
            <Heading>Lukas Hoover</Heading>
          </Col>
          <Col md={12}>
            <Subtext>Cool Guy</Subtext>
          </Col>
          <Col md={3}>
            <Nav>1</Nav>
          </Col>
          <Col md={1}>
            <Border />
          </Col>
          <Col md={4}>
            <Nav>2</Nav>
          </Col>
          <Col md={1}>
            <Border />
          </Col>
          <Col md={3}>
            <Nav>3</Nav>
          </Col>
        </BootRow>
      </HomePage>
    );
  }
}
