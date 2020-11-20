import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
`;

export const BackImage = styled.img`
  width: 100vw;
  height: 100vh;
`;

export const MessageError = styled.h1`
  text-shadow: 0.3em 0.3em 0.2em black;
  border: 5px solid white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 25vh;
  font-size: 10vh;
  color: white;
  margin: 2vh;
`;

export const ButtonReturn = styled.button`
  margin: 5vh;
  width: 15vw;
  height: 10vh;
  background: linear-gradient(160deg, #1ac890, blue);
  font-size: 1.5em;
  color: white;
  text-shadow: 0.3em 0.3em 0.2em black;
  opacity: 85%;
  border-radius: 15px;

  &:hover {
    opacity: 100%;
    border: 3px;
  }
`;
