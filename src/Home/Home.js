import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";
import { Link } from "react-router-dom";
import dog from "../assets/images/road.jpg";
import About from "../About";
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
      margin: 0;
      text-align: center;
      padding-top: 100px;
      color: #a5bcff;
    `;
    const BELEVIE = styled.h1`
      font-size: 70px;
      font-size: 155px;
      margin: 0;
    `;
    const Water = styled.div`
      background-image: url(${dock});
      height: 100%;
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: 0px;
    `;
    const LeftArrow = styled(Glyphicon)`
      float: left;
      color: #8496cc;
      position: absolute !important;
      top: 20% !important;
      padding-left: 20px;
      font-size: 60px;
      -webkit-animation: MoveUpDown 2s linear infinite;
      -moz-animation: MoveUpDown 2s linear infinite;
      animation: MoveUpDown 2s linear infinite;
      @-moz-keyframes MoveUpDown {
        0% {
          top: 23%;
        }
        50% {
          top: 22%;
        }
        100% {
          top: 23%;
        }
      }
      @-webkit-keyframes MoveUpDown {
        0% {
          top: 23%;
        }
        50% {
          top: 22%;
        }
        100% {
          top: 23%;
        }
      }
      @keyframes MoveUpDown {
        0% {
          top: 23%;
        }
        50% {
          top: 22%;
        }
        100% {
          top: 23%;
        }
      }
    `;
    const RightArrow = styled(Glyphicon)`
      float: right;
      right: 30px;
      color: #8496cc;
      position: absolute !important;
      top: 20% !important;
      font-size: 60px;
      -webkit-animation: MoveUpDown 2s linear infinite;
      -moz-animation: MoveUpDown 2s linear infinite;
      animation: MoveUpDown 2s linear infinite;
      @-moz-keyframes MoveUpDown {
        0% {
          top: 23%;
        }
        50% {
          top: 22%;
        }
        100% {
          top: 23%;
        }
      }
      @-webkit-keyframes MoveUpDown {
        0% {
          top: 23%;
        }
        50% {
          top: 22%;
        }
        100% {
          top: 23%;
        }
      }
      @keyframes MoveUpDown {
        0% {
          top: 23%;
        }
        50% {
          top: 22%;
        }
        100% {
          top: 23%;
        }
      }
    `;
    let options = {
      sectionClassName: "section",
      anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
      scrollBar: false,
      navigation: false,
      verticalAlign: false,
      arrowNavigation: true
    };
    return (
      <SectionsContainer {...options}>
        <Section color="#2C417F">
          <Banner> Lukas!</Banner>

          <LeftArrow glyph="arrow-down" />
          <RightArrow glyph="arrow-down" />
        </Section>
        <Section color="#354E98">
          <Tech />
        </Section>
        <Section>
          <Water>
            <Web>The Best web developer this side of the Mississippi.</Web>
          </Water>
        </Section>
        <Section>
          <Smoke>
            <BELEVIE>BELEVIE.</BELEVIE>
          </Smoke>
        </Section>
      </SectionsContainer>
    );
  }
}
