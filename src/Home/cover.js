import React, { Component } from 'react'
import imgs from '../assets/images/paint.jpg'
import styled from 'styled-components'
const Img = styled.div`position: absolute;
background: url(${imgs});
background-repeat: no-repeat;
background-size: cover;
height: 75vh;
width: 100vw;
display: block;
left: 0;
right: 0;
top: 0;
`;
export default class cover extends Component {
    render() {
        return (
            <Img src={imgs}>
                
            </Img>
        )
    }
}
