import React, { Component } from "react";

import { SectionsContainer, Section } from "react-fullpage";

import awsS3 from "../Svg/aws-s3.svg";
import cloud from "../Svg/aws-cloudfront.svg";

import git from "../Svg/git-icon.svg";
import npm from "../Svg/npm.svg";
import nodejs from "../Svg/nodejs.svg";
import react from "../Svg/react.svg";
import router from "../Svg/react-router.svg";
import redux from "../Svg/redux.svg";
import boot from "../Svg/bootstrap.svg";

import github from "../Svg/github-icon.svg";

import InnerPage from "./InnerPage";

import styled from "styled-components";
import { MuiThemeProvider, Paper } from "material-ui";

const Banner = styled.div`
  font-size: 4.5vw;
  width: 100%;
  height: 150px;
  margin-top: 21%;
  background-color: #8496cc;
  text-align: center;
  font-family: VT323;
  padding-top: 14px;
  @media (max-width: 425px) {
    font-size: 11.5vw;
  }
`;

export default class About extends Component {
  render() {
    let options = {
      sectionClassName: "section",
      anchors: ["1", "2", "3", "4", "5", "6", "7"],
      scrollBar: true,
      navigation: false,
      verticalAlign: false,
      arrowNavigation: true
    };
    return (
      <SectionsContainer {...options}>
        <Section color="#2C417F">
          <Banner> What Powers This Site?</Banner>
        </Section>
        <Section color="#7F682C">
          <InnerPage
            Header={"React"}
            img={react}
            content={
              "React is a JavaScript library used for building out Userinerfaces. React is built by facebook and aims to provide extremlyfast UI in a simple and scalable fasion."
            }
            link={"https://reactjs.org/"}
          />
        </Section>
        <Section color="#5B77CB">
          <InnerPage
            Header={"AWS S3"}
            img={awsS3}
            content={
              "Amazon S3 is object storage built to store and retrieve any amount of data from anywhere – web sites and mobile apps, corporate applications, and data from IoT sensors or devices. It is designed to deliver 99.999999999% durability."
            }
            link={"https://aws.amazon.com/s3/"}
          />
        </Section>
        <Section color="#7F682C">
          <InnerPage
            Header={"AWS CloudFront"}
            img={cloud}
            content={
              "Amazon CloudFront is a global content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to your viewers with low latency and high transfer speeds."
            }
            link={"https://aws.amazon.com/cloudfront/"}
          />
        </Section>
        <Section color="#5B77CB">
          <InnerPage
            Header={"Redux"}
            img={redux}
            content={
              "Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test."
            }
            link={"https://redux.js.org/"}
          />
        </Section>
        <Section color="#7F682C">
          <InnerPage
            Header={"React Router"}
            img={router}
            content={
              "React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native."
            }
            link={"https://reacttraining.com/react-router/"}
          />
        </Section>
        <Section color="#5B77CB">
          <InnerPage
            Header={"GitHub"}
            img={github}
            content={
              "GitHub is a web-based hosting service for version control using git. "
            }
            link={"https://github.com/lhoover12"}
            linkTitle="View Github"
          />
        </Section>
      </SectionsContainer>
    );
  }
}
