import styled from "styled-components";
import { device } from "./device.jsx";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 15vh;

  @media ${device.mobile} {
    height: 15vh;
  }
`;

export const Main = styled.div`
  width: 99vw;
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: flex-start;
`;

export const BonesTitle = styled.h1`
  @import url("http://fonts.cdnfonts.com/css/cartoon-bones");
  font-family: "Cartoon Bones", sans-serif;
  font-size: 8vh;
  color: red;
  @media ${device.mobile} {
    display: none;
  }
`;

export const Image = styled.img`
  height: 15vh;
  width: 6vw;
  @media ${device.mobile} {
    width: 18vw;
  }
`;
