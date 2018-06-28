import React, { Component } from "react";
import Styled from "styled-components";

const Wrapper = Styled.div`   
 position: absolute;
top: 0;
background-color: #CC99B7;
margin: 0;
font-family: VT323;
bottom: 0;
right: 0;
left: 0;
`;

const Text = Styled.div`
position: fixed;
width: 100%;
background-color: black;
color: yellow;
text-align: center;
height: 75px;
font-size: 55px;
padding-top: 15px;
padding-bottom: 15px;
top: 35%;`;

const TryAgain = Styled.p`
font-size: 32px;
top: 45%;
width: 100%;
position: fixed;
text-align: center;`;
class error extends Component {
  render() {
    return (
      <Wrapper>
        <Text>404 Not Found</Text>
        <TryAgain>Try Again</TryAgain>
      </Wrapper>
    );
  }
}

export default error;
