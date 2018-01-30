import styled from "styled-components";
import { Col } from "react-bootstrap";
import React, { Component } from "react";

const Panel = styled(Col)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 1px 10px 0 #b1dcff;
  border-radius: 5px;
  padding-bottom: 15px;
  padding-top: 15px;
  margin-bottom: 40px;
  margin-top: 40px;
  height: 350px;
  width: 525px !important;
  margin-right: 15px;
  margin-left: 15px;
`;

export default Panel;
