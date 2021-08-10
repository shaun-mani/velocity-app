import React, { useState } from "react";
//import { useState } from "react";
import "./App.css";
//import Map from "./components/Map";
//import NavBar from "./components/NavBar";
import Header from "./components/Header";
// import FunctionClickTest0 from './components/FunctionClickTest0'
// import Test from './components/Test'
import VerticalMenu from "./components/Verticalmenu";
// import ButtonClickTest1 from './components/ButtonClickTest1';
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Verticalmenu from "./components/Verticalmenu";


import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import * as parksData from "./data/Buildings.json";

function Map(props) {
  const [selectedPark, setSelectedPark] = useState(null);
  console.log(props.currentKeyword);
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 43.47096427132252, lng: -80.5441679188489 }}
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
  const [currentKeyword, setKeyword] = useState(null);
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    
    <div className="page-container">
      <div className="content-wrap">
      
        <Header />
        <React.Fragment>
          {/* <NavBar /> */}
          {/* <MarkerClick /> */}

          {/* <FunctionClickTest0 /> */}
          {/* <ButtonClickTest1 /> */}
          {/* <Test /> */}
          <div style={{ width: "70vw", height: "80vh" }}>
            <WrappedMap
              currentKeyword={currentKeyword}
              googleMapURL={
                "https://maps.googleapis.com/maps/api/js?key=AIzaSyD0LW50_GtYuB0nlw5-YhW5i1uBCGNe3XA&v=3.exp&libraries=geometry,drawing,places"
              }
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "100%" }} />}
            />
          </div>
        </React.Fragment>
        <Timeline />
        <Verticalmenu setKeyword={setKeyword} currentKeyword={currentKeyword} />
      </div>

      <Footer />
    </div>
   
  );
}

export default App;
