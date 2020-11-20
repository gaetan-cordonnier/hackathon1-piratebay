import React from "react";

const Filter = ({ handleChange, handleSubmit, select }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Choose :
          <select value={select} onChange={handleChange}>
            <option value="weather">Météo</option>
            <option value="boat">Bateau</option>
            <option value="tresor">Trésor</option>
          </select>
        </label>
      </form>
    </>
  );
};

export default Filter;
