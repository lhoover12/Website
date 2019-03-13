import React, { Component } from "react";
import styled from "styled-components";

const Body = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  background-color: #000;
`;
const Text = styled.h1`
  font-size: 5em;
  color: #ff69b4;
`;
class Birthday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getDate: new Date(),
      day: 0,
      moth: 0
    };
  }
  componentDidMount() {
    this.setState({
      month: this.state.getDate.getMonth() + 1,
      day: this.state.getDate.getDate()
    });
  }

  render() {
    return (
      <Body>
        <Text>Birthday.</Text>

        <Text>Is it {this.props.person} Birthday?</Text>
        <Text>
          {this.state.month === this.props.month &&
          this.state.day === this.props.day
            ? "Yes."
            : "No."}
        </Text>
      </Body>
    );
  }
}

export default Birthday;
