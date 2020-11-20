import { Reset } from "styled-reset";
import { useState } from "react";

import Header from "./Components/Header";
import MapPirateBay from "./Components/MapPirateBay";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  const [select, setSelect] = useState("weather");

  const handleChange = event => {
    setSelect(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <Reset />
      <Header
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        select={select}
      />
      <MapPirateBay select={select} />
      <Footer />
    </div>
  );
}

export default App;
