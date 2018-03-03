import React, { Component } from "react";
import styled from "styled-components";
import { Row, Grid, Col } from "react-bootstrap";
import { Return } from "../components";
import { Header, Footer } from "../components";
import img from "../assets/images/Lukas.PNG";
import Health from "../assets/images/Health.PNG";
import Developer from "../assets/images/Developer.PNG";
const Wrapper = styled(Col)`
  width: 100%;
  height: 90%;
  text-align: center;
  background-color: #e2e2e2;

  margin-top: 20px;
  margin-bottom: 40px;
  box-shadow: 5px 5px 10px #aab1cc;
`;
const Site = styled.img`
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;
const SiteName = styled.p`
  margin-top: -20px;
  text-align: center;
  font-size: 3rem;
`;
export default class Projects extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid style={{ paddingTop: "110px" }}>
          <Row>
            <a href="https://provider.linkhealth.com/#/">
              <Wrapper md={12}>
                <Site src={Health} />
                <SiteName>provider.linkhealth.com</SiteName>
              </Wrapper>
            </a>
            <a href="https://developer.linkhealth.com/">
              <Wrapper md={12}>
                <Site src={Developer} />
                <SiteName>developer.linkhealth.com</SiteName>
              </Wrapper>
            </a>
            <a href="http://lukashoover.com">
              <Wrapper md={12}>
                <Site src={img} />
                <SiteName>LukasHoover.com</SiteName>
              </Wrapper>
            </a>
          </Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}
