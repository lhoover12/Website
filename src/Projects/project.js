import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Grid, Col } from 'react-bootstrap';
import { Header, Footer } from '../components';
import img from '../assets/images/Lukas.PNG';
import Health from '../assets/images/Health.PNG';
import Developer from '../assets/images/Developer.PNG';
import depression from '../assets/images/depression.PNG';
import psas from '../assets/images/psas.PNG';
import Image from './image';
const Wrapper = styled(Grid)`
  &&& {
    min-height: 100vh;
    text-align: center;
    padding-right: 0;
    padding-left: 0;
    color: #f2d399;
  }
`;
//https://color.adobe.com/trends/Graphic-design?page=2
export default class Projects extends Component {
  render() {
    return (
      <Wrapper>
        <Col md={12}>
          <h1>hey</h1>
        </Col>
        <Image img={img} />
        <Image img={Health} />
        <Image img={Developer} />
        <Image img={depression} />
        <Image img={psas} />
        <Image />
      </Wrapper>
    );
  }
}
