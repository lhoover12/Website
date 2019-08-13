import React, { Component } from "react";
import styled from "styled-components";
import img from "../assets/images/heart.png";
const FooterWrapper = styled.footer`
  
  height: 165px;
  padding: 40px;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  width: -webkit-fill-available;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 1px 10px 0 #708090;
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
const Love = styled.h3`
 
`;
export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <a href={"https://www.youtube.com/watch?v=HQmmM_qwG4k"}>
        <Heart />
       <Love> Built With Love</Love>
       </a>
      </FooterWrapper>
    );
  }
}
