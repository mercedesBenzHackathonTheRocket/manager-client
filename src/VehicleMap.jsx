import React, { Component } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import VehicleMarker from "./VehicleMarker";

const VehicleMap = withScriptjs(withGoogleMap((props) =>{
    
    //const vehicles = props.vehicleLoading ? null : props.data;
    const vehicles = [
        {id: 1, lat: 19, lon: 23},
        {id: 2, lat: 22, lon: -10}
    ]

    let markers = null;
    if (vehicles !== null){
        markers = vehicles.map( vehicle => <VehicleMarker
            key={vehicle.id}
            vehicle={vehicle}
            location={{lat: vehicle.lat, lng: vehicle.lon}}
        />);
    }


    return (
        <GoogleMap
          defaultZoom={5}
          center={ { lat:  42.3601, lng: -71.0589 } }
          >
          {vehicles === null ? "Loading" : markers}
        </GoogleMap>
      );
    }
  ))
  
  export default VehicleMap;

