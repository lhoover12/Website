import React, { Component } from 'react';
import styled from 'styled-components';
import {Col} from 'react-bootstrap';


const Head = styled.div`
font-size: 65px;
width: 100%;
height: 100px;
background-color: #14A1CC;
font-family: 'Rubik',sans-serif;
padding-top: 25px;

`

export default class Header extends Component {
  render() {
    return (
      <Head>
      </Head>
    )
  }
}
