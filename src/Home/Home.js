import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Panel, Picture } from "../components";
import LrgComponent from "../panels/LrgComponent";
import { Link } from "react-router-dom";
import dog from "../assets/images/road.jpg";

import alien from "../assets/images/back.gif";
import dock from "../assets/images/bg_2048.jpg";
import duck from "../assets/images/dock.jpg";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Link to="/skills">
            <Panel md={4} mdOffset={0}>
              Skills
            </Panel>
          </Link>
          <Link to="/projects">
            <Panel md={4} mdOffset={4}>
              Projects
            </Panel>
          </Link>
          <LrgComponent
            title={"The Dude"}
            img={dog}
            text={"The Dude is a good boy."}
          />
          <LrgComponent
            title={"I am a web developer"}
            img={dock}
            text={"The Best web developer this side of the Mississippi."}
          />
          <LrgComponent title={""} img={alien} text={"BELIVE."} />
          <LrgComponent
            title={"Cmaera Man"}
            img={duck}
            text={"I fix and take pictures"}
          />
        </Row>
      </Grid>
    );
  }
}
