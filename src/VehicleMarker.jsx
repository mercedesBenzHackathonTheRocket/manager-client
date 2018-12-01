import React from "react";
import { Marker } from "react-google-maps";
import Logo from "./mercedes-benz.png";

export default class VehicleMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
        >
        </Marker>
    );
  }
}