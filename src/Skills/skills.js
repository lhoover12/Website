import React, { Component } from "react";
import styled from "styled-components";
import { Row, Grid, Col } from "react-bootstrap";
import { Return } from "../components";
import { Header, Footer } from "../components";
const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  text-align: center;
  font-size: 7vw;
  @media (max-width: 780px) {
    font-size: 16vw;
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
              <Wrapper>
                TODO... Get Good At Somthing <Return to="/" />
              </Wrapper>
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}
