import React, { Component } from "react";
import { Row, Grid, Col } from "react-bootstrap";

import react from "../Svg/react.svg";

import aws from "../Svg/aws.svg";
import awsS3 from "../Svg/aws-s3.svg";
import cloud from "../Svg/aws-cloudfront.svg";

import git from "../Svg/git-icon.svg";
import npm from "../Svg/npm.svg";
import nodejs from "../Svg/nodejs.svg";
import redux from "../Svg/redux.svg";
import boot from "../Svg/bootstrap.svg";
import styled from "styled-components";

const Gr = styled(Grid)`
  height: 100%;
  width: 100%;
`;
const Ro = styled(Row)`
  padding-bottom: 5%;
  width: 100%;
`;
const Co = styled(Col)``;
const Built = styled.h1`
  font-size: 100px;
  margin: auto;
  text-align: center;
  margin-top: -90px;
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
const Img1 = styled.img`
  width: 75%;
  margin-left: 30px;
  margin-right: 30px;
  display: block;
  margin: auto;
`;
const Img2 = styled.img`
  width: 42%;
  margin-left: 30px;
  margin-right: 30px;
`;
const Img3 = styled.img`
  width: 66%;
  margin-left: 30px;
  margin-right: 30px;
`;
const App = styled.p`
  text-align: center;
`;
export default class About extends Component {
  render() {
    return (
      <Images>
        <Built>Powered By</Built>
        <Gr>
          <Ro>
            <Co md={4} mdOffset={4}>
              <Img1 src={react} />
              <App>React.js</App>
            </Co>
          </Ro>

          <Ro>
            <Co md={3} mdOffset={2}>
              <Img2 src={boot} />
              <App>BootStrap</App>
            </Co>
            <Co md={3}>
              <Img2 src={awsS3} />
              <App>AWS S3</App>
            </Co>
            <Co md={3}>
              <Img2 src={cloud} />
              <App>AWS Cloud Front</App>
            </Co>
          </Ro>
          <Ro>
            <Center>
              <Co md={2} mdOffset={1}>
                <Img3 src={git} />
                <App>GIT</App>
              </Co>
              <Co md={2}>
                <Img3 src={npm} />
                <App>NPM</App>
              </Co>

              <Co md={2}>
                <Img3 src={nodejs} />
                <App>Node.js</App>
              </Co>
              <Co md={2}>
                <Img3 src={aws} />
                <App>AWS</App>
              </Co>
              <Co md={2}>
                <Img3 src={redux} />
                <App>Redux</App>
              </Co>
            </Center>
          </Ro>
        </Gr>
      </Images>
    );
  }
}
