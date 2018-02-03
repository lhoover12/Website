import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";
import dog from "../assets/images/road.jpg";
import Tech from "../Tech";
import alien from "../assets/images/back.gif";
import dock from "../assets/images/bg_2048.jpg";

import styled from "styled-components";
import { SectionsContainer, Section } from "react-fullpage";
export default class Home extends Component {
  render() {
    const Banner = styled.div`
      font-size: 90px;
      width: 100%;
      height: 150px;
      margin-top: 21%;
      background-color: #8496cc;
      text-align: center;
      font-family: VT323;
      padding-top: 14px;
    `;
    const Smoke = styled.div`
      background-image: url(${alien});
      height: 100%;
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: 0px;
    `;
    const Web = styled.h1`
      ${props =>
        props.textFull
          ? "padding-top: 15%; font-size: 18.5vw;"
          : "font-size: 8vw;"} margin: 0;
      text-align: center;
      color: #a5bcff;
      @media (max-width: 430px) {
        ${props =>
          props.textFull
            ? " font-size: 32.5vw; padding-top: 83%;"
            : "font-size: 13vw;"};
      }
    `;
    const BELEVIE = styled.h1`
      font-size: 70px;
      font-size: 155px;
      margin: 0;
      @media (max-width: 768px) {
        font-size: 22.5vw;
      }
    `;
    const Sec = styled.div`
      background-image: url(${props => props.pic});
      height: 100%;
      background-repeat: no-repeat;
      font-size: 5vw;
      background-position: 0px;
      @media (min-width: 768px) {
        background-size: 100%;
      }
      @media (max-width: 768px) {
        background-position-x: 50%;
      }
      @media (max-width: 380px) {
        background-position-x: -700px;
      }
    `;
    const Arrow = styled(Glyphicon)`
      float: ${props => props.float};
      color: #8496cc;
      position: absolute !important;
      top: 15% !important;
      font-size: 60px;
      ${props =>
        props.float === "right"
          ? "right:30px;"
          : "padding-left:20px; "} -webkit-animation: MoveUpDown 2s linear infinite;
      -moz-animation: MoveUpDown 2s linear infinite;
      animation: MoveUpDown 2s linear infinite;
      @-moz-keyframes MoveUpDown {
        0% {
          top: 17%;
        }
        50% {
          top: 18%;
        }
        100% {
          top: 17%;
        }
      }
      @-webkit-keyframes MoveUpDown {
        0% {
          top: 17%;
        }
        50% {
          top: 18%;
        }
        100% {
          top: 17%;
        }
      }
      @keyframes MoveUpDown {
        0% {
          top: 17%;
        }
        50% {
          top: 18%;
        }
        100% {
          top: 17%;
        }
      }
    `;

    let options = {
      sectionClassName: "section",
      anchors: [
        "sectionOne",
        "sectionTwo",
        "sectionThree",
        "sectionFour",
        "sectionFive"
      ],
      scrollBar: false,
      navigation: false,
      verticalAlign: false,
      arrowNavigation: true
    };
    return (
      <SectionsContainer {...options}>
        <Section color="#2C417F">
          <Arrow float={"left"} glyph="arrow-down" />
          <Arrow float={"right"} glyph="arrow-down" />
          <Banner> Lukas!</Banner>
        </Section>
        <Section color="#354E98">
          <Tech />
        </Section>
        <Section>
          <Sec pic={dog}>
            <Web textFull>THE DUDE.</Web>
          </Sec>
        </Section>
        <Section>
          <Sec pic={dock}>
            <Web>The Best web developer this side of the Mississippi.</Web>
          </Sec>
        </Section>
        <Section>
          <Smoke>
            <BELEVIE>BELIEVE.</BELEVIE>
          </Smoke>
        </Section>
      </SectionsContainer>
    );
  }
}
