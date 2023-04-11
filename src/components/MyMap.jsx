import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import { Marker, Popup } from 'react-leaflet';
import mapdata from './../data/countries.json'
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MyMap extends Component {
    state = {
        //Budapest
        lat:47.4983,
        lng:19.0408,
        zoom: 4
    };

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
        const center = [this.state.lat, this.state.lng];
        return (
            <div>
                <h2 style={{ textAlign: "center" }}>My map with GeoJSON objects</h2>

                <MapContainer style={{ height: "100vh" }} zoom={this.state.zoom} center={center}>

                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    <GeoJSON style={this.countryStyle} data={mapdata.features} onEachFeature={this.onEachCountry}/>

                    <Marker position={center}>
                        <Popup>Budapest &#x1F49A;</Popup>
                    </Marker>

                </MapContainer>
            </div>
        );
    }
}

export default MyMap;