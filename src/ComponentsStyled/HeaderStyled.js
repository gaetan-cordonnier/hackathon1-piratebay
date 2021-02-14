import styled from "styled-components";
import { device } from "./device.jsx";

export const Main = styled.div`
  width: 100vw;
  height: 15vh;
  display: flex;
  background-color: black;
  flex-direction: row;
  justify-content: space-between;
  @media ${device.mobile} {
    height: 15vh;
  }
`;

export const Container = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const BonesTitle = styled.h1`
  @import url("http://fonts.cdnfonts.com/css/cartoon-bones");
  font-family: "Cartoon Bones", sans-serif;
  font-size: 4em;
  margin-left: 20px;
  color: red;
  @media ${device.mobile} {
    display: none;
  }
`;

export const Image = styled.img`
  height: 15vh;
  width: auto;
  @media ${device.mobile} {
    height: 15vw;
  }
`;
