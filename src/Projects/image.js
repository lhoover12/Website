import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

const Comp = styled(Col)`
&&&{
       ${props =>
         props.img
           ? `    background-image: url("${props.img}");`
           : `    background-color: #D9CAAD;`}

    padding:0;
    min-height: 200px;
    background-size: cover;
     transition: transform .2s;
     &:hover{
         z-index: 100;
         transform: scale(1.5); 
     }
     padding: 3px;
}
`;
const But= styled.button`
&&&{
  min-height: 200px;
      height: 100%;
      width:100%;
      display: block;
      background: none;
      border: none;
      z-index: 3000;
      :focus{

        outline: solid 3px #F2921D;
      }
}
`;

const Image = props => {

  return <Comp img={props.img} md={4} >
    <But onClick={props.onClick}></But>
  </Comp>;
};

export default Image;
