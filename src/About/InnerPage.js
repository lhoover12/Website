import React, { Component } from "react";

import Styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { MuiThemeProvider, Paper } from "material-ui";

const Header = Styled.h1`
font-family: VT323;
font-size: 11vw;
width: 100%;
text-align: left;
@media (max-width: 768px) {
    font-size: 17vw;
    text-align: center;
  }
`;
const Content = Styled.p`
 padding: 50px;
font-size: 3vw;

@media (max-width: 500px) {
    padding: 20px;
    font-size: 6vw;
  }
`;

const Img = Styled.img`
display:block;
margin:auto;
@media (max-width: 500px) {
    width: 25%;
  }
`;
const Ro = Styled(Row)`

padding-top: 100px;
 margin-right: 15px !important; 
 margin-left: 15px !important;
 @media (max-width: 500px) {
  padding-top: 20px;
  }
    `;

const Butt = Styled(Paper)`
    height: 50px;
    width: 100%;
    border: 0;
    background-color: #8496cc !important;
    text-align: center;
    color: #fff;
    width: 100%;
    font-size: 4vw;
    height: 110px;
    @media (max-width: 500px) {
        font-size: 12vw;
        height: 70px;
    }
    `;

export default class componentName extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Ro>
          <Col md={3}>
            <Img src={this.props.img} />
          </Col>
          <Col md={9}>
            <Header>{this.props.Header}</Header>
          </Col>
          <Col md={12}>
            <Content>{this.props.content}</Content>
          </Col>
          <Col md={12}>
            <a href={this.props.link}>
              <Butt>
                {this.props.linkTitle ? this.props.linkTitle : "Learn more"}
              </Butt>
            </a>
          </Col>
        </Ro>
      </MuiThemeProvider>
    );
  }
}
