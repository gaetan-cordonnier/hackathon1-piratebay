import styled from "styled-components";

export const VotesStyled = styled.div`
  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 3px solid red;
    background-color: #e2da7a;
    border-radius: 10px;
    width: max-content;
    height: max-content;
    @media screen and (max-width: 375px) and (max-height: 812px) {
      width: 45vw;
    }
  }
  .title {
    text-align: center;
    font-family: "Amatic SC", cursive;
    font-size: 3em;
  }

  .voteTypes {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .voteType {
    font-family: "Amatic SC", cursive;
    font-size: 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 25vh;
    height: 5vh;
    align-items: center;
    padding: 5px 10px;
    background-color: #bbbbbb;
    border-radius: 5px;
    margin: 2px;
  }

  .voteType button {
    font-family: "Amatic SC", cursive;
    font-size: 1em;
    color: #000;
    background-color: grey;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #b2b2b2;
  }
`;
