import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
`;

const Filter = ({ handleChange, handleSubmit, select }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container>
          <select value={select} onChange={handleChange}>
            <option value="Weather">Weather</option>
            <option value="boat">Boats</option>
            <option value="tresor">Treasures</option>
          </select>
        </Container>
      </form>
    </>
  );
};

export default Filter;
