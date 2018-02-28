import React, { Component } from "react";
import styled from "styled-components";
import img from "../assets/images/heart.png";
const FooterWrapper = styled.footer`
  margin-top: 80px;
  height: 120px;
  padding: 40px;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  width: -webkit-fill-available;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 1px 10px 0 #b1dcff;
  position: inherit;
  display: block;
  bottom: 0;
`;

const Heart = styled.div`
  width: 100%;
  margin: auto;
  height: 88px;
  margin-top: -20px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
`;
export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <Heart />
      </FooterWrapper>
    );
  }
}
