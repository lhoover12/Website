import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";

const Head = styled.div`
  font-size: 65px;
  width: 100%;
  height: 80px;
  color: #000;
  background-color: rgba(0, 0, 0, 0.1);
  font-family: "VT323", monospace;
  text-align: center;
  font-size: 65px;
`;
export default class Header extends Component {
  render() {
    return <Head>Lukas!</Head>;
  }
}
