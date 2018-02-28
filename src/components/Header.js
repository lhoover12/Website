import React, { Component } from "react";
import styled from "styled-components";
import { Glyphicon } from "react-bootstrap";
import { Link } from "react-router-dom";

const Left = styled.div`
  float: left;
`;
const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 4vw;
`;
const Head = styled.div`
  a{
  color #d2d2d2 ;
  }
  font-family: VT323;
  @media (max-width: 500px) {
    height: 80px;
    text-align: center;
    
    position: fixed;
    top: 0;

    z-index: 1;
    h1{
      display: none;
    }
    span {
      float: left;
      font-size: 12vw;
      padding: 15px;
      @media (max-width: 500px) {
        font-size: 12vw;
        padding: 15px;
      }
    }
  }
  @media (min-width: 500px) {
    height: 110px;
    width: 100%;
    background-color: #8496cc;
    position: absolute;
    font-size: 3vw;
    span {
      padding-left: 15px;
      padding-top: 15px;
  }
`;
export default class Header extends Component {
  render() {
    return (
      <Head>
        <Left>
          <Link to={"/"}>
            <Glyphicon glyph="arrow-left" />
          </Link>
        </Left>
        <Title>Lukas!</Title>
      </Head>
    );
  }
}
