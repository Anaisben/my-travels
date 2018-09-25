import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>

        <Travel
          destination="Taj Mahal"
          country="Inde"
          distance="6.757,55 km"
          photo="https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-0-20151104113424.jpg"
        />

        <Travel
          destination="Hobbiton"
          country="Nouvelle Zélande"
          distance="18 942 km"
          photo="https://cdn.getyourguide.com/img/tour_img-762345-145.jpg"
        />

      </div>
    );
  }
}

export default App;