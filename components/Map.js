import * as React from "react";
import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import MarkerImage from "../public/marker.png";
import Image from "next/image";
import "mapbox-gl/dist/mapbox-gl.css";

function MapBox({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  //Transforming the search results object into to required latitude/longitude coordinates

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewState, setViewState] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <Map
      style={{ width: 600, height: 800 }}
      mapStyle="mapbox://styles/nikhilkr/cldk3j4ap001u01rnr25gnrxc"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat}>
            <Image
              onClick={() => setSelectedLocation(result)}
              src={MarkerImage}
              alt=""
              width={35}
              className=" cursor-pointer animate-bounce"
            />
          </Marker>

          {/* Popup when marker is clicked */}

          {selectedLocation.long === result.long ? (
            <Popup
              longitude={result.long}
              latitude={result.lat}
              onClose={() => setSelectedLocation({})}
              closeOnClick={false}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
}

export default MapBox;
