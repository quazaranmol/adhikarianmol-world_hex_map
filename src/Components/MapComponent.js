import React from 'react';
import { Map, TileLayer, GeoJSON } from 'leaflet';

export default function MapComponent(){
    const position = [51.505, -0.09]; // Define the initial view of the map
    const zoomLevel = 13; // Define the initial zoom level of the map

    const polygonData = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [0, 0],
                  [0, 10],
                  [10, 10],
                  [10, 0],
                  [0, 0]
                ]
              ]
            },
            properties: {
              name: 'Polygon 1',
              color: 'red'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [15, 15],
                  [15, 25],
                  [25, 25],
                  [25, 15],
                  [15, 15]
                ]
              ]
            },
            properties: {
              name: 'Polygon 2',
              color: 'blue'
            }
          }
        ]
      };

      
      const polygonStyle = {
        fillColor: '#3388ff',
        fillOpacity: 0.5,
        weight: 2,
        color: '#3388ff'
      };


    return (
      <Map center={position} zoom={zoomLevel}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON data={polygonData} style={polygonStyle} />
      </Map>
    );
}