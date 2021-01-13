import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import ZipCode from './components/ZipCode';
import CitySearch from './components/CitySearch';

function ZipSearchField(props) {
  return (<div>This is the ZipSearchField component</div>);
}

function City(props) {
  return (<div>This is the City component</div>)
}

function App() {
  return ( 
    <div className="App">
      <div className="App-header">
          <h2>Zip Code and City Search</h2>
      </div>
      <br></br>
      <ZipCode />
      <br></br>
      <CitySearch />
    </div>
    
  );
}

export default App;