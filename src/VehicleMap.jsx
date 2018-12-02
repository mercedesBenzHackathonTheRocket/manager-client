import React, { Component } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import VehicleMarker from "./VehicleMarker";

const VehicleMap = withScriptjs(withGoogleMap((props) =>{
    
    const vehicles = props.vehicleLoading ? null : props.data;

    console.log(props.data)
    console.log(props.vehicleLoading)
    console.log("here", props.extraInfo)

    let markers = null;
    if (vehicles != null){
        markers = (<VehicleMarker
            key={vehicles.latitude.value + " " + vehicles.longitude.value}
            vehicle={vehicles}
            extraInfo={props.extraInfo}
            location={{lat: vehicles.latitude.value, lng: vehicles.longitude.value}}
        />);
    }


    return (
        <GoogleMap
          defaultZoom={5}
          center={ { lat:  42.3601, lng: -71.0589 } }
          >
          {vehicles == null || props.extraInfo == null ? "Loading" : markers}
        </GoogleMap>
      );
    }
  ))
  
  export default VehicleMap;

