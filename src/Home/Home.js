import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Panel} from '../components';


 
export default class Home extends Component {
  render() {
    return (
    <Grid>
    <Row>
        <Panel md={12}>
            this is home 
        </Panel>
        <Panel md={12}>
            this is home 
        </Panel>
    </Row>
    </Grid>
    )
  }
}
