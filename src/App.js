import { Reset } from "styled-reset";
import { useState } from "react";
import NotFound from "./Components/NotFound";

import Header from "./Components/Header";
import MapPirateBay from "./Components/MapPirateBay";
import NotFound from "./Components/NotFound";
import { Reset } from "styled-reset";

import Footer from "./Components/Footer";

import Footer from "./Components/Footer";

function App() {
  const [select, setSelect] = useState("weather");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <Reset />
      <NotFound />
      <Header
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        select={select}
      />
      <MapPirateBay select={select} />
      <Footer />
      <Reset />
    </div>
  );
}

export default App;
