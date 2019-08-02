import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Grid, Col } from 'react-bootstrap';
import { Header, Footer } from '../components';
import img from '../assets/images/Lukas.PNG';
import Health from '../assets/images/Health.PNG';
import Developer from '../assets/images/Developer.PNG';
import depression from '../assets/images/depression.PNG';
import psas from '../assets/images/psas.PNG';
import Image from './image';
const Wrapper = styled(Grid)`
  &&& {
    min-height: 100vh;
    text-align: center;
    padding-right: 0;
    padding-left: 0;
    color: #f2d399;
  }
`;
const Desc = styled.p`
  &&& {
    min-height: 100vh;
    text-align: center;
    padding-right: 0;
    padding-left: 0;
    color: #f2d399;
  }
`;



//https://color.adobe.com/trends/Graphic-design?page=2
export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      des: ''};
  }

  render() {

    const showDesc = (num) =>{
      switch(num) {
        case 1:
        this.setState({des: "My site"});
          break;
        case 2:
          this.setState({des: "Link"});
          break;
        case 3:
          this.setState({des: "LinK Developer"});
          break;
        case 4:
          this.setState({des: "Depression Screener"});
          break;
        case 5:
          this.setState({des: "PSaaS"});
          break;
        default:
          // code block
      } 
    
    }
    return (
      <Wrapper>
        <Col md={12}>
          <h1>Look at all these projects!</h1>
        </Col>
        <Image onClick={()=>{showDesc(1)}} img={img} />
        <Image onClick={()=>{showDesc(2)}} img={Health} />
        <Image onClick={()=>{showDesc(3)}} img={Developer} />
        <Image onClick={()=>{showDesc(4)}} img={depression} />
        <Image onClick={()=>{showDesc(5)}} img={psas} />
        <Image />
        <Desc>
          {this.state.des}
        </Desc>
      </Wrapper>
    );
  }
}
