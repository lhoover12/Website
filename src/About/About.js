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
import {MuiThemeProvider ,Paper} from 'material-ui'

const Gr = styled(Grid)`
  max-height: 100%;
  width: 100%;
`;
const Ro = styled(Row)`
  padding-bottom: 5%;
  width: 100%;
`;
const Co = styled(Col)`
  height: 200px;
`;
const Built = styled.h1`
  font-size: 100px;
  margin: auto;
  text-align: center;
  margin-top: -90px;
  margin-bottom: 50px;
`;
const Images = styled.div`
  position: absolute;
  top: 30%;
  width: 100%;
  height: 18%;
`;
const Center = styled.div`
  display: block;
  margin: auto;
`;
const Img1 = styled(Image)`
  margin-left: 30px;
  margin-right: 30px;
  display: block;
  margin: auto;
  height: auto;
  max-width: 75%;
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
font-size: 44px;
height: 160px;
padding-top: 17%;
float: ${props => props.float ? props.float : ''};
`;

export default class About extends Component {
  render() {
    const style = {
    };
    
    return (
      <MuiThemeProvider>
      <Images>
        
        <Built>Powered By</Built>
        <Gr>
          <Ro>
            <Co md={3} >
              <Flipper front={<Img2 src={react} />} back={<Paper style={style} zDepth={1} ><App>React.js</App> </Paper>} />
            </Co>
        
            <Co md={3} >
              <Flipper
                front={<Img2 src={boot} />}
                back={<Paper style={style} zDepth={1} ><App >BootStrap</App > </Paper>}
              />
            </Co>
            <Co md={3}>
              <Flipper front={<Img2 src={awsS3}  />} back={<Paper style={style} zDepth={1} ><App >AWS S3</App> </Paper>} />
            </Co>
            <Co md={3}>
              <Flipper
                front={<Img2 src={cloud} />}
                back={<Paper style={style} zDepth={1} ><App >AWS Cloud Front</App> </Paper>}
              />
            </Co>
          </Ro>
          <Ro>
            <Center>
              <Co md={2} >
                <Flipper front={<Img3 src={git} />} back={<Paper style={style} zDepth={1} > <App>GIT</App> </Paper>} />
              </Co>
              <Co md={2}>
                <Flipper front={<Img3 src={npm} />} back={<Paper style={style} zDepth={1} > <App>NPM</App> </Paper>} />
              </Co>

              <Co md={2}>
                <Flipper front={<Img3 src={router} />} back={<Paper style={style} zDepth={1} ><App>React Router</App> </Paper>} />
              </Co>
              <Co md={2}>
                <Flipper front={<Img3 src={redux} />} back={<Paper style={style} zDepth={1} > <App>React Redux</App> </Paper>} />
              </Co>
              
              <Co md={2}>
                <Flipper
                  front={<Img3 src={nodejs} />}
                  back={<Paper style={style} zDepth={1} ><App>Node.js</App></Paper>}
                />
              </Co>
              <Co md={2}>
                <Flipper front={<Img3 src={github} />} back={<Paper style={style} zDepth={1} > <App>GitHub</App> </Paper>} />
              </Co>
            </Center>
          </Ro>
          </Gr>
      </Images>
      </MuiThemeProvider>
    );
  }
}
