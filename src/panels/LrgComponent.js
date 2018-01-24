import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";

class LrgComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Comment",
      comm: "",
      Url: ""
    };
  }

  render() {
    const Panel = styled(Col)`
      width: 120%;
      margin: auto;
      height: 455px;
      margin-bottom: 30px;
      padding: 0 !important;
    `;
    const Hr = styled.hr`
      width: 120%;
      margin-top: 1rem;
      margin-bottom: 1rem;
      margin-left: -10%;
      border: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    `;
    const Image = styled.div`
      height: 360px;
      width: 100%;
      background-image: url(${this.props.img});
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
    `;
    const Message = styled.h4`
      margin-top: 0px;
      border-bottom: 1px solid #eee;
    `;
    const Title = styled.h2`
      margin-bottom: 0px;
    `;
    return (
      <div>
        <Hr />
        <Panel md={12}>
          <div>
            <Title>{this.props.title}</Title>
            <Image />
          </div>
          <Message>{this.props.text}</Message>
        </Panel>
      </div>
    );
  }
}

export default LrgComponent;
