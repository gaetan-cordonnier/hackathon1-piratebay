import React from "react";
import Logo from "../images/logo.png";
import {
  BonesTitle,
  Container,
  Image,
  Main,
} from "../ComponentsStyled/HeaderStyled.js";

import Filter from "./Filter";

export default function Header({ handleChange, handleSubmit, select }) {
  return (
    <Main>
      <Container>
        <Image src={Logo} />
        <BonesTitle>Pirate Bay</BonesTitle>
      </Container>
      <Filter
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        select={select}
      />
    </Main>
  );
}
