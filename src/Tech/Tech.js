import React, { Component } from "react";
import { Row, Grid, Col } from "react-bootstrap";
import { RaisedButton, MuiThemeProvider } from "material-ui";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Glyphicon } from "react-bootstrap";

const Ro = styled(Row)`
  margin-top: 5%;
  margin-bottom: 10%;
  .glyphicon {
    display: none;
  }

  &:hover {
    .glyphicon {
      display: block;
      position: absolute !important;
      color: #cb9b1e !important;
      padding-left: 0px;
      -webkit-animation: MoveLeftRight 1s linear infinite;
      -moz-animation: MoveLeftRight 1s linear infinite;
      animation: MoveLeftRight 1s linear infinite;
      @-moz-keyframes MoveLeftRight {
        0% {
          padding-left: 0px;
        }
        50% {
          padding-left: 30px;
        }
        100% {
          padding-left: 0px;
        }
      }
      @-webkit-keyframes MoveLeftRight {
        0% {
          padding-left: 0px;
        }
        50% {
          padding-left: 30px;
        }
        100% {
          padding-left: 0px;
        }
      }
      @keyframes MoveLeftRight {
        0% {
          padding-left: 0px;
        }
        50% {
          padding-left: 30px;
        }
        100% {
          padding-left: 0px;
        }
      }
    }
  }
`;
const Icon = styled(Glyphicon)`
  font-size: 60px;
  padding-top: 12px;
`;
const Button = styled(RaisedButton)`
  width: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
  font-size
`;

export default class Tech extends Component {
  render() {
    const style = {
      fontFamily: "VT323",
      fontSize: "55px"
    };
    const buttonStyle = {
      backgroundColor: "#8496cc"
    };
    return (
      <div>
        <MuiThemeProvider>
          <Grid fluid>
            <Ro>
              <Col md={1} mdOffset={3}>
                <Icon glyph="arrow-right" />
              </Col>
              <Col md={4}>
                <Link to="/projects">
                  <Button
                    label="Projects"
                    buttonStyle={buttonStyle}
                    labelStyle={style}
                  />
                </Link>
              </Col>
            </Ro>

            <Ro>
              <Col md={1} mdOffset={3}>
                <Icon glyph="arrow-right" />
              </Col>
              <Col md={4}>
                <Link to="skills">
                  <Button
                    buttonStyle={buttonStyle}
                    label="Skills"
                    labelStyle={style}
                  />
                </Link>
              </Col>
            </Ro>

            <Ro>
              <Col md={1} mdOffset={3}>
                <Icon glyph="arrow-right" />
              </Col>
              <Col md={4}>
                <Link to="about">
                  <Button
                    buttonStyle={buttonStyle}
                    label="This Site"
                    labelStyle={style}
                  />
                </Link>
              </Col>
            </Ro>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}
