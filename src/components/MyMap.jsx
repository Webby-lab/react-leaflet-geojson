import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";

import mapdata from './../data/countries.json'
import "leaflet/dist/leaflet.css";

class MyMap extends Component {
    state = {}
    render() {
        return (
            <div>
                <h2 style={{ textAlign: "center" }}>My map with GeoJSON objects</h2>

                <MapContainer style={{ height: "100vh" }} zoom={4} center={[20, 100]}>

                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                    />
                    <GeoJSON data={mapdata.features}/>
                </MapContainer>
            </div>
        );
    }
}

export default MyMap;