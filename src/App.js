import React, { useState, useEffect } from "react";
//import { useState } from "react";
import "./App.css";
//import Map from "./components/Map";
//import NavBar from "./components/NavBar";
import Header from "./components/Header";
// import FunctionClickTest0 from './components/FunctionClickTest0'
// import Test from './components/Test'
// import ButtonClickTest1 from './components/ButtonClickTest1';
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import VerticalMenu0 from "./components/VerticalMenu0"
import DescriptionMap from "./components/DescriptionMap"

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import * as parksData from "./data/Buildings.json";

function Map(props, level) {
  const [selectedPark, setSelectedPark] = useState(null);
  console.log(props.currentKeyword);
  console.log(props.currentKeynum);
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 43.47110427132252, lng: -80.5448679188489 }}
    >
      {parksData.buildings
        .filter(
          (building) => {
            for (let i = 0; i < building.keyword.length; i++) {
              if (props.currentKeyword === null ||
              building.keyword[i] === props.currentKeyword) {
                return building;
              }
            }
          }
        )
        .filter(
          (resource) => {
            if ((props.currentKeynum === null) ||
            resource.timeline === props.currentKeynum) {
              return resource;
            }
          }
        )
        .map((park) => (
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
            <h3>{selectedPark.resourceName}</h3>
            <h6>Organizer: {selectedPark.organizer}</h6>
            <h6>Location: {selectedPark.buildingName}</h6>
            <p>{selectedPark.Description}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

function App() {

const [width, setWidth] = React.useState(window.innerWidth);
const [height, setHeight] = React.useState(window.innerHeight);

  const [currentKeyword, setKeyword] = useState(null);
  const [currentKeynum, setKeynum] = useState(null);

  const WrappedMap = withScriptjs(withGoogleMap(Map));
  
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);

    return () => window.removeEventListener("resize", updateWidthAndHeight);
});

  return (
    
    <div className="page-container">
      <div className="content-wrap">
      
        <Header />
        <DescriptionMap />
        <VerticalMenu0 setKeynum={setKeynum} currentKeynum={currentKeynum} 
        setKeyword={setKeyword} currentKeyword={currentKeyword} />
          <div style={{ marginBottom: "50px", marginTop: "-800px", marginLeft: "300px", width: "70vw", height: "85vh" }}>
            
            <WrappedMap className="googlemap"
              currentKeyword={currentKeyword}
              currentKeynum={currentKeynum}
              googleMapURL={
                "https://maps.googleapis.com/maps/api/js?key=AIzaSyD0LW50_GtYuB0nlw5-YhW5i1uBCGNe3XA&v=3.exp&libraries=geometry,drawing,places"
              }
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "100%" }} />}
            />
          </div>
        <Timeline setKeynum={setKeynum} currentKeynum={currentKeynum}
        setKeyword={setKeyword} currentKeyword={currentKeyword} />
      </div>

      <Footer />
    </div>
   
  );
}

export default App;
