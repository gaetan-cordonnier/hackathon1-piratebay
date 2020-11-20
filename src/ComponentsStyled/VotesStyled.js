import styled from "styled-components";

export const VotesStyled = styled.div`
	font-family: "Amatic SC", cursive;
	font-size: 1.7em;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 15vw;
	height: 50vh;
	background-color: #e2da7a;
	border-radius: 10px;

	.p {
	}

	.voteTypes {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.voteType {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 13vw;
		height: 5vh;
		align-items: center;
		padding: 5px 10px;
		background-color: #eaeab6;
		border-radius: 5px;
		margin: 2px;
	}

	.voteCount {
	}

	.voteType button {
		font-family: "Amatic SC", cursive;
		font-size: 1em;
		color: #000;
		background-color: #c6c6c6;
		border: none;
		outline: none;
		cursor: pointer;
		border-radius: 5px;
		border: 1px solid #b2b2b2;
	}
`;
