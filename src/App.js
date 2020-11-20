import { useState } from "react";
import { Reset } from "styled-reset";

import MapPirateBay from "./Components/MapPirateBay";
import Filter from "./Components/Filter";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [select, setSelect] = useState("weather");

  const handleChange = event => {
    setSelect(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div>
      <Header />
      <Filter
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        select={select}
      />
      <MapPirateBay
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        select={select}
      />
      <Footer />
      <Reset />
    </div>
  );
}

export default App;
