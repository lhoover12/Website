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
    background-size: contain;
     transition: transform .2s;
     &:hover{
         z-index: 100;
         transform: scale(1.5); 
     }
}
`;

Image = props => {
  var test = '1';
  return <Comp img={props.img} md={4} />;
};

export default Image;
