import React, { Component } from "react";
import styled from "styled-components";
import { Row, Grid, Col } from "react-bootstrap";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 1000px;
  text-align: center;
  font-size: 11vw;
  @media (max-width: 780px) {
    padding-top: 50%;
    font-size: 20vw;
  }
`;
export default class Projects extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Wrapper>TODO... Make Cool Projects</Wrapper>
          </Col>
        </Row>
      </Grid>
    );
  }
}
