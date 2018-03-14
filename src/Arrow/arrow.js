import { Glyphicon } from "react-bootstrap";
import styled from "styled-components";
import React, { Component } from "react";

export default class Arrow extends Component {
  render() {
    const Arrow = styled(Glyphicon)`
      float: ${this.props.float};
      color: #8496cc;
      position: relative !important;
      font-size: 60px;
      ${this.props.float === "right"
        ? "right:30px;"
        : "padding-left:20px; "} -webkit-animation: ${this.props
          .name} 2s linear infinite;
      -moz-animation: UpDown 2s linear infinite;
      animation: UpDown 2s linear infinite;
      @-moz-keyframes UpDown {
        0% {
          top: 18%;
        }
        50% {
          top: 25%;
        }
        100% {
          top: 18%;
        }
      }
      @-webkit-keyframes UpDown {
        0% {
          top: 18%;
        }
        50% {
          top: 25%;
        }
        100% {
          top: 18%;
        }
      }
      @keyframes UpDown {
        0% {
          top: 18%;
        }
        50% {
          top: 25%;
        }
        100% {
          top: 18%;
        }
      }
    `;
    return <Arrow glyph="arrow-down" />;
  }
}
