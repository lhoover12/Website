import React, { Component } from "react";
import styled from "styled-components";
import { Row, Grid, Col } from "react-bootstrap";
import react from "../Svg/react.svg";
import aws from "../Svg/aws.svg";
import bootstrap from "../Svg/bootstrap.svg";
import { Header, Footer } from "../components";
import Styled from "styled-components";
const Wrapper = styled.h1`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 7vw;
  @media (max-width: 780px) {
    font-size: 16vw;
  }
`;

const Img = Styled.img`
display:block;
margin:auto;
width: 50%;
@media (min-width: 768px) {

}
@media (max-width: 500px) {
    width: 25%;
  }
`;
export default class Skills extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid style={{ paddingTop: "110px" }}>
          <Row>
            <Col md={12}>
              <Wrapper>Exceptional!</Wrapper>
            </Col>
            <Col md={3}>
              <Img src={react} />
            </Col>
            <Col md={3}>
              <Img src={aws} />
            </Col>
            <Col md={3}>
              <Img src={bootstrap} />
            </Col>
            <Col md={3}>
              <Img src={react} />
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}
