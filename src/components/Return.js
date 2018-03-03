import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Return = styled(Link)`
  font-size: 2vw;
  text-align: center;
  display: block;
  margin: auto;
  margin-top: 75px;
  color: #8496cc;
  text-decoration: underline;
  &:hover {
    color: #8496cc;
    text-decoration: underline;
  }
  @media (max-width: 500px) {
    font-size: 8vw;
  }
`;
export default class componentName extends Component {
  render() {
    return <Return to="/">Return Home</Return>;
  }
}
