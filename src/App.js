import { useState } from "react";

import MapPirateBay from "./Components/MapPirateBay";
import Filter from "./Components/Filter";

function App() {
  const [select, setSelect] = useState("weather");

  const handleChange = event => {
    setSelect(event.target.value);
  };

  const handleSubmit = event => {
    alert(`you selected ${select}`);
    event.preventDefault();
  };
  return (
    <div>
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
    </div>
  );
}

export default App;
