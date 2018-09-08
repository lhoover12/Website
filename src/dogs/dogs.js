import React, { Component } from "react";
import Dog from "./dog";
class Dogs extends Component {
  render() {
    return (
      <div>
        <Dog solid Header={"THE DUDE"} color={"#141D71"} />
        <Dog
          img={
            "https://s3.amazonaws.com/lukasdevelopementtest/Dogs/20151228_142145.jpg"
          }
        />
        <Dog solid Header={"BISOU THE DOG"} color={"#20083E"} />
        <Dog
          img={"https://s3.amazonaws.com/lukasdevelopementtest/Dogs/BIS.jpg"}
        />
      </div>
    );
  }
}

export default Dogs;
