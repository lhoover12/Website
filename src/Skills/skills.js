import React, { Component } from "react";
import styled from "styled-components";
import { Row, Grid, Col } from "react-bootstrap";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 1000px;
  font-size: 12vw;
  text-align: center;
  @media (max-width: 780px) {
    padding-top: 50%;
    font-size: 20vw;
  }
`;
export default class Skills extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Wrapper>TODO... Get Good At Somthing</Wrapper>
          </Col>
        </Row>
      </Grid>
    );
  }
}
