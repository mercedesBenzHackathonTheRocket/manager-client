import React from "react";
import VehicleMap from "./VehicleMap";
import MapWithAMakredInfoWindow from "./VehicleMap";

const MAP_API_KEY = "AIzaSyDFz1mFqY6E2oiw5X661_Xnah9Wmofh1Ag";
const mode = 'driving';
const origin = 'istanbul';
const destination = 'ankara';
const ROUTE_URL = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${MAP_API_KEY}&mode=${mode}`;
const MAP_URL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDFz1mFqY6E2oiw5X661_Xnah9Wmofh1Ag&v=3.exp&libraries=geometry,drawing,places`;
export default class VehicleMapContainer extends React.Component {
	render() {
		return (
			<VehicleMap
				googleMapURL={MAP_URL}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `420px`, width: '100%' }} />}
                mapElement={<div style={{ height: `100%` }} />}
				vehicleLoading={this.props.vehicleLoading}
				data={this.props.data}
				extraInfo={this.props.extraInfo}
			/>
		);
	}
}