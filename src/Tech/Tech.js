import React, { Component } from "react";
import { Row, Grid, Col } from "react-bootstrap";
import { RaisedButton, MuiThemeProvider } from "material-ui";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Glyphicon } from "react-bootstrap";
import { Spring } from "react-spring";

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
const Links = styled(Link)`
  div {
    background: none !important;
    box-shadow: none !important;
  }
`;

const Content = ({ left, right, width, label, buttonStyle, labelStyle }) => (
  <Button
    style={{ marginLeft: `${left}%`, width: `${width}%` }}
    buttonStyle={buttonStyle}
    label={label}
    labelStyle={labelStyle}
  />
);
export default class Tech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: window.location.hash,
      toggle: true
    };
  }
  toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  componentDidMount = () => {};
  render() {
    const style = {
      fontFamily: "VT323",
      fontSize: "55px"
    };
    const buttonStyle = {
      backgroundColor: "#8496cc"
    };
    console.log(this.state);
    return (
      <div>
        <MuiThemeProvider>
          <Grid fluid>
            <Ro>
              <Col md={1} mdOffset={3}>
                <Icon glyph="arrow-right" />
              </Col>
              <Col md={4}>
                <Links to="/projects">
                  <Spring
                    config={{ tension: 80, friction: 20 }}
                    from={{ color: "black" }}
                    to={{
                      width: window.location.hash !== "#2" ? 0 : 100,
                      left: window.location.hash !== "#2" ? 50 : 0
                    }}
                    onRest={() => {
                      this.setState({ toggle: false });
                    }}
                    toggle={this.state.toggle} // Additional props will be spread over the child
                    label="Projects"
                    buttonStyle={buttonStyle}
                    labelStyle={style}
                    children={Content} // Render prop
                  />
                </Links>
              </Col>
            </Ro>

            <Ro>
              <Col md={1} mdOffset={3}>
                <Icon glyph="arrow-right" />
              </Col>
              <Col md={4}>
                <Links to="skills">
                  <Spring
                    config={{ tension: 40, friction: 20 }}
                    from={{ color: "black" }}
                    to={{
                      width: window.location.hash !== "#2" ? 0 : 100,
                      left: window.location.hash !== "#2" ? 50 : 0
                    }}
                    onRest={() => {
                      this.setState({ toggle: false });
                    }}
                    toggle={this.state.toggle} // Additional props will be spread over the child
                    label="Skills"
                    buttonStyle={buttonStyle}
                    labelStyle={style}
                    children={Content} // Render prop
                  />
                </Links>
              </Col>
            </Ro>

            <Ro>
              <Col md={1} mdOffset={3}>
                <Icon glyph="arrow-right" />
              </Col>
              <Col md={4}>
                <Links to="about">
                  <Spring
                    config={{ tension: 20, friction: 20 }}
                    from={{ color: "black" }}
                    to={{
                      width: window.location.hash !== "#2" ? 0 : 100,
                      left: window.location.hash !== "#2" ? 50 : 0
                    }}
                    onRest={() => {
                      this.setState({ toggle: false });
                    }}
                    toggle={this.state.toggle} // Additional props will be spread over the child
                    label="This Site"
                    buttonStyle={buttonStyle}
                    labelStyle={style}
                    children={Content} // Render prop
                  />
                </Links>
              </Col>
            </Ro>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}
