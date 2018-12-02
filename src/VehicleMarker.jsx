import React from "react";
import { Marker } from "react-google-maps";
import Logo from "./mercedes-benz.png";
import { InfoWindow } from 'react-google-maps';

export default class VehicleMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          title={ "TIRE PRESSURE: \n" + this.props.extraInfo.tirepressurefrontleft.value + " " + this.props.extraInfo.tirepressurefrontleft.unit + "\n"
                + this.props.extraInfo.tirepressurefrontright.value + " " + this.props.extraInfo.tirepressurefrontright.unit + "\n" 
                + this.props.extraInfo.tirepressurerearleft.value + " " + this.props.extraInfo.tirepressurerearleft.unit + "\n"
                + this.props.extraInfo.tirepressurerearright.value + " " + this.props.extraInfo.tirepressurerearright.unit}
          
        >
        </Marker>
    );
  }
}