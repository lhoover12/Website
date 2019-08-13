import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row as BootRow, Col } from "react-bootstrap";
const Head = styled.header`
  background-color: #efefef;
 

`;
const Row = styled(BootRow)`
padding-top: 20px;
padding-bottom: 20px;
margin:0;
       box-shadow: 0 1px 10px 0 rgba(0,0,0,0), 0px 1px 6px 0 #708090;
}

`;
const Container = styled.div`
margin-left: 15px;
margin-right: 15px;
width: 100%;
 padding-bottom: 10px;

}

`;
class Header extends Component {
  render() {
    return (
      <Head>
        <Container>
          <Row>
            <Col md={6}>col 1</Col>
            <Col md={2}>Projects</Col>
            <Col md={2}>Skills</Col>
            <Col md={2}>This Site</Col>
          </Row>
        </Container>
      </Head>
    );
  }
}

export default Header;
