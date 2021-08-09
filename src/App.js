import React from 'react';
import { useState } from "react";
import './App.css';
//import Map from './components/Map';
import Title from './components/Title.js';

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

import * as parksData from "./data/Buildings.json";

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);
  return (
    
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 43.469761, lng: -80.538811 }}
    >
      {parksData.buildings.map((park) => (
        <Marker
          key={park.buildingId}
          position={{ lat: park.latitude, lng: park.longitude }}
          onClick={() => {
            setSelectedPark(park);
          }}
        />
      ))}

      {selectedPark && (
        <InfoWindow
          position={{ lat: selectedPark.latitude, lng: selectedPark.longitude }}
          onCloseClick={() => {
            setSelectedPark(null);
          }}
        >
          <div>
            <h2>{selectedPark.buildingName}</h2>
            <p>{selectedPark.Description}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
          <div>
          </div>
          {/* <FunctionClickTest0 /> */}
          {/* <ButtonClickTest1 /> */}
          {/* <Test /> */}
          <div Title style={{ width: "70vw", height: "80vh" }}>
            
          
            <WrappedMap
              
              googleMapURL={
                "https://maps.googleapis.com/maps/api/js?key=AIzaSyD0LW50_GtYuB0nlw5-YhW5i1uBCGNe3XA&v=3.exp&libraries=geometry,drawing,places"
              }
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "100%" }} />}
              
            />
          </div>
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <>
//     <Title />
//       <Map />
//     </>
//   );
// }

// export default App;