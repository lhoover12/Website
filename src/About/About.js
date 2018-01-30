import React, { Component } from "react";
import { Row, Grid, Col, Image } from "react-bootstrap";

import react from "../Svg/react.svg";

import aws from "../Svg/aws.svg";
import awsS3 from "../Svg/aws-s3.svg";
import cloud from "../Svg/aws-cloudfront.svg";

import git from "../Svg/git-icon.svg";
import npm from "../Svg/npm.svg";
import nodejs from "../Svg/nodejs.svg";
import redux from "../Svg/redux.svg";
import boot from "../Svg/bootstrap.svg";
import router from "../Svg/react-router.svg";
import github from "../Svg/github-icon.svg";

import styled from "styled-components";
import Flipper from "../components/Flipper";
import { MuiThemeProvider, Paper } from "material-ui";

const Gr = styled(Grid)`
  max-height: 100%;
  width: 100%;
`;
const Ro = styled(Row)`
  width: 100%;
`;
const Co = styled(Col)`
  margin-bottom: 100px;
  height: 200px;
`;
const Built = styled.h1`
  font-size: 100px;
  margin: auto;
  text-align: center;
  margin-bottom: 50px;
  border-bottom: 1px solid #74797f;
  padding-bottom: 25px;
`;
const Images = styled.div`
  position: absolute;
  top: 10%;
  width: 100%;
  height: 18%;
`;
const Center = styled.div`
  display: block;
  margin: auto;
`;

const Img2 = styled.img`
  max-height: 100%;
  max-width: 50%;
`;
const Img3 = styled.img`
  margin-left: 30px;
  margin-right: 30px;
  max-height: 100%;
  max-width: 66%;
`;
const App = styled.p`
  font-size: 35px;
  padding-top: 12%;
  float: ${props => (props.float ? props.float : "")};
`;
const Info = styled.a`
  bottom: 25px;
  display: inline-block;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #aab8e5;
  color: #2b4cb2;
  font-size: 20px;
  position: absolute;
  width: 50%;
  left: 25%;
`;

export default class About extends Component {
  render() {
    const style = { height: "200px" };

    return (
      <MuiThemeProvider>
        <Images>
          <Gr>
            <Ro>
              <Co md={12}>
                <Built>Powered By</Built>
              </Co>
            </Ro>
            <Ro>
              <Co md={3}>
                <Flipper
                  front={<Img2 src={react} />}
                  back={
                    <Paper style={style} zDepth={1}>
                      <App>React.js</App>
                      <Info href="https://reactjs.org/"> Info</Info>
                    </Paper>
                  }
                />
              </Co>

              <Co md={3}>
                <Flipper
                  front={<Img2 src={boot} />}
                  back={
                    <Paper style={style} zDepth={1}>
                      <App>BootStrap</App>
                      <Info href="https://getbootstrap.com"> Info</Info>
                    </Paper>
                  }
                />
              </Co>
              <Co md={3}>
                <Flipper
                  front={<Img2 src={awsS3} />}
                  back={
                    <Paper style={style} zDepth={1}>
                      <App>AWS S3</App>
                      <Info href="https://aws.amazon.com/s3/"> Info</Info>
                    </Paper>
                  }
                />
              </Co>
              <Co md={3}>
                <Flipper
                  front={<Img2 src={cloud} />}
                  back={
                    <Paper style={style} zDepth={1}>
                      <App>AWS Cloud Front</App>
                      <Info href="https://aws.amazon.com/cloudfront/">
                        {" "}
                        Info
                      </Info>
                    </Paper>
                  }
                />
              </Co>
            </Ro>
            <Ro>
              <Center>
                <Co md={2}>
                  <Flipper
                    front={<Img3 src={git} />}
                    back={
                      <Paper style={style} zDepth={1}>
                        <App>GIT</App>
                        <Info href="https://git-scm.com/"> Info</Info>
                      </Paper>
                    }
                  />
                </Co>
                <Co md={2}>
                  <Flipper
                    front={<Img3 src={npm} />}
                    back={
                      <Paper style={style} zDepth={1}>
                        <App>NPM</App>
                        <Info href="https://www.npmjs.com//"> Info</Info>
                      </Paper>
                    }
                  />
                </Co>

                <Co md={2}>
                  <Flipper
                    front={<Img3 src={router} />}
                    back={
                      <Paper style={style} zDepth={1}>
                        <App>React Router</App>
                        <Info href="https://reacttraining.com/react-router/">
                          {" "}
                          Info
                        </Info>
                      </Paper>
                    }
                  />
                </Co>
                <Co md={2}>
                  <Flipper
                    front={<Img3 src={redux} />}
                    back={
                      <Paper style={style} zDepth={1}>
                        <App>React Redux</App>
                        <Info href="https://redux.js.org/"> Info</Info>
                      </Paper>
                    }
                  />
                </Co>

                <Co md={2}>
                  <Flipper
                    front={<Img3 src={nodejs} />}
                    back={
                      <Paper style={style} zDepth={1}>
                        <App>Node.js</App>
                        <Info href="https://nodejs.org/en/"> Info</Info>
                      </Paper>
                    }
                  />
                </Co>
                <Co md={2}>
                  <Flipper
                    front={<Img3 src={github} />}
                    back={
                      <Paper style={style} zDepth={1}>
                        <App>GitHub</App>
                        <Info href="https://github.com/lhoover12"> Info</Info>
                      </Paper>
                    }
                  />
                </Co>
              </Center>
            </Ro>
          </Gr>
        </Images>
      </MuiThemeProvider>
    );
  }
}
