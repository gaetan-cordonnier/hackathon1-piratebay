import styled from "styled-components";
import { device } from "./device.jsx";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 20vh;
  width: 100%;
  background-color: black;
  @media ${device.mobile} {
    height: 15vh;
  }
`;
export const BonesTitle = styled.h1`
  @import url("http://fonts.cdnfonts.com/css/cartoon-bones");
  font-family: "Cartoon Bones", sans-serif;
  font-size: 8vh;
  color: red;
`;

export const Image = styled.img`
  height: 15vh;
  width: 6vw;
  @media ${device.mobile} {
    width:18vw;

`;
