import React, { Component } from "react";

import styled from "styled-components";

const Flip = styled.div`
  width: 100%;
  height: auto;
  -webkit-perspective: 800;
  perspective: 800;
  position: relative;
  text-align: center;
`;

const Front = styled.div`
  width: 100%;
  height: auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 2;
  position: absolute;
  z-index: 1;
`;

const Back = styled.div`
  width: 100%;
  height: auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 2;
  padding-top: 10%;
  -webkit-transform: rotatey(-180deg);
  transform: rotatey(-180deg);
`;

export default class App extends React.Component {
  render() {
    const Card = styled.div`
      width: 100%;
      height: auto;
      -webkit-transform-style: preserve-3d;
      -webkit-transition: 0.5s;
      transform-style: preserve-3d;
      transition: 0.5s;
      background-color: #fff;
      &:hover {
        -webkit-transform: rotatey(-180deg);
        transform: rotatey(-180deg);
      }
    `;
    return (
      <Flip>
        <Card>
          <Front>{this.props.front}</Front>
          <Back>{this.props.back}</Back>
        </Card>
      </Flip>
    );
  }
}
