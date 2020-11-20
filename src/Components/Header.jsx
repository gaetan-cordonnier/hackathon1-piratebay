import React from "react";
import Logo from "../images/logo.png";
import {
  BonesTitle,
  Container,
  Image,
} from "../ComponentsStyled/HeaderStyled.js";

export default function Header() {
  return (
    <Container>
      <Image src={Logo} />
      <BonesTitle>Pirate Bay</BonesTitle>
    </Container>
  );
}
