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
import styled from "styled-components";
import Flipper from "../components/Flipper";

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
  max-width: 100%;
`;
const Img2 = styled.img`
  margin-left: -50px;
  margin-right: 30px;
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
              <Flipper front={<Img1 src={react} />} back={<div>back</div>} />
            </Co>
          </Ro>

          <Ro>
            <Co md={3} mdOffset={2}>
              <Flipper
                front={<Img2 src={boot} />}
                back={<App>BootStrap</App>}
              />
            </Co>
            <Co md={3}>
              <Flipper front={<Img2 src={awsS3} />} back={<App>AWS S3</App>} />
            </Co>
            <Co md={3}>
              <Flipper
                front={<Img2 src={cloud} />}
                back={<App>AWS Cloud Front</App>}
              />
            </Co>
          </Ro>
          <Ro>
            <Center>
              <Co md={2} mdOffset={1}>
                <Flipper front={<Img3 src={git} />} back={<App>GIT</App>} />
              </Co>
              <Co md={2}>
                <Flipper front={<Img3 src={npm} />} back={<App>NPM</App>} />
              </Co>

              <Co md={2}>
                <Flipper
                  front={<Img3 src={nodejs} />}
                  back={<App>Node.js</App>}
                />
              </Co>
              <Co md={2}>
                <Flipper front={<Img3 src={aws} />} back={<App>AWS</App>} />
              </Co>
              <Co md={2}>
                <Flipper front={<Img3 src={redux} />} back={<App>Redux</App>} />
              </Co>
            </Center>
          </Ro>
        </Gr>
      </Images>
    );
  }
}
