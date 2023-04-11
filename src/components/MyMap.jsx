import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";

import mapdata from './../data/countries.json'
import "leaflet/dist/leaflet.css";

class MyMap extends Component {
    state = {}

    countryStyle = {
        fillColor : "red",
        fillOpacity: 1,
        color: "black",
        weight: 2,
        dashArray: 1,
    };

    onCountryClick = (event) => {
                event.target.setStyle({
                    color: "green",
                    fillColor: "yellow",
                    fillOpacity: 0.1
                });
            };
        
    onCountryMouseover = (event) => {
        event.target.setStyle({
            fillColor: "red",
            fillOpacity: 0.5
        });
    };        

    onEachCountry = (country, layer) => {
        const countryName = country.properties.ADMIN;
        layer.bindPopup(countryName + ": Christina was here!");

        layer.on({
            click: this.onCountryClick,
            mouseover: this.onCountryMouseover,
        });
    };


    render() {
        return (
            <div>
                <h2 style={{ textAlign: "center" }}>My map with GeoJSON objects</h2>

                <MapContainer style={{ height: "100vh" }} zoom={4} center={[20, 100]}>

                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    <GeoJSON style={this.countryStyle} data={mapdata.features} onEachFeature={this.onEachCountry}/>

                </MapContainer>
            </div>
        );
    }
}

export default MyMap;