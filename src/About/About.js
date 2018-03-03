import React, { Component } from "react";
import styled from "styled-components";
import { SectionsContainer, Section } from "react-fullpage";
import { Link } from "react-router-dom";
import awsS3 from "../Svg/aws-s3.svg";
import cloud from "../Svg/aws-cloudfront.svg";
import react from "../Svg/react.svg";
import router from "../Svg/react-router.svg";
import redux from "../Svg/redux.svg";
import github from "../Svg/github-icon.svg";
import boot from "../Svg/bootstrap.svg";
import InnerPage from "./InnerPage";
import img from "../assets/images/heart.png";
import Header from "../components/Header";
import Arrow from "../Arrow";
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
const Head = styled.h1`
  font-family: VT323;
  font-size: 11vw;
  width: 100%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 17vw;
    text-align: center;
  }
`;
const Heart = styled.div`
  background-image: url(${img});
  height: 60%;
  width: 80%;
  background-repeat: no-repeat;
  background-size: 10%;
  margin: auto;
  background-position: 0px;
  display: block;
  background-position: center;
  @media (max-width: 768px) {
    background-size: 30%;
  }
`;
const Return = styled(Link)`
  font-size: 2vw;
  text-align: center;
  display: block;
  margin: auto;
  margin-top: 75px;
  color: #8496cc;
  text-decoration: underline;
  &:hover {
    color: #8496cc;
    text-decoration: underline;
  }
  @media (max-width: 500px) {
    font-size: 8vw;
  }
`;
export default class About extends Component {
  render() {
    let options = {
      sectionClassName: "section",
      anchors: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      scrollBar: false,
      navigation: false,
      verticalAlign: false,
      arrowNavigation: true
    };
    return (
      <div>
        <Header />
        <SectionsContainer {...options}>
          <Section color="#2C417F">
            <Banner> What Powers This Site?</Banner>
            <Return to="/">Return Home</Return>
            <Arrow float={"left"} glyph="arrow-down" />
            <Arrow float={"right"} glyph="arrow-down" />
          </Section>
          <Section color="#8CA9FF">
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
                "Amazon S3 is object storage built to store and retrieve any amount of data from anywhere – web sites and mobile apps, corporate applications, and data from IoT sensors or devices."
              }
              link={"https://aws.amazon.com/s3/"}
            />
          </Section>
          <Section color="#8CA9FF">
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
              Header={"Boot Strap"}
              img={boot}
              content={
                "Bootstrap is a free and open-source front-end web framework for designing websites and web applications."
              }
              link={"https://getbootstrap.com/"}
            />
          </Section>
          <Section color="#8CA9FF">
            <InnerPage
              Header={"Redux"}
              img={redux}
              content={
                "Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test."
              }
              link={"https://redux.js.org/"}
            />
          </Section>
          <Section color="#5B77CB">
            <InnerPage
              Header={"React Router"}
              img={router}
              content={
                "React Router is a collection of navigational components that compose declaratively with your application."
              }
              link={"https://reacttraining.com/react-router/"}
            />
          </Section>
          <Section color="#8CA9FF">
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
          <Section color="#5B77CB">
            <InnerPage
              Header={"Heart"}
              img={img}
              content={"I Used a Whole Lotta Love."}
              link={"https://www.youtube.com/watch?v=HQmmM_qwG4k"}
              linkTitle="How do I get Heart?"
            />
          </Section>
        </SectionsContainer>
      </div>
    );
  }
}
