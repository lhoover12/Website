import React, { Component } from "react";
import styled from "styled-components";
const H1 = styled.h1`
  display: inline-block;
  margin: auto;
  width: 60%;
  padding-top: 10%;
  font-size: 15em;
  border-bottom: 1px solid;
  ${props =>
    props.Text
      ? `  `
      : `padding-top: ${window.screen.availHeight /
          2.5}px; `} @media (max-width: 768px) {
    font-size: 7em;
  }
`;
const P = styled.h1`
  @media (max-width: 768px) {
    font-size: 4em;
  }
  font-size: 7em;
`;

const Pages = styled.div`
  font-family: VT323;
  height: ${window.screen.availHeight}px;
  ${props =>
    props.solid
      ? props.color
        ? ` color: #fff;
      background:${props.color}`
        : `
      background : #fff;`
      : `
      background-size: cover;
      background-position-x: 50%;
      margin-top: -20px;
      background-image: url(${props.img});
      background-repeat: no-repeat;
      background-attachment: fixed;`};
`;
export default class dog extends Component {
  render() {
    return (
      <Pages {...this.props}>
        {this.props.Header ? (
          <H1 {...this.props}> {this.props.Header} </H1>
        ) : (
          ""
        )}
        <P> {this.props.Text}</P>
      </Pages>
    );
  }
}
