import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 20vw;
	height: 15vh;
	margin-top: 10vh;
	margin-left: 10vw;
`;

const Select = styled.select`
	@import url("http://fonts.cdnfonts.com/css/cartoon-bones");
	font-family: "Cartoon Bones", sans-serif;
	min-width: 10ch;
	max-width: 30ch;
	border: 1px solid red;
	border-radius: 0.25em;
	padding: 0.25em 0.5em;
	font-size: 1.25rem;
	cursor: pointer;
	line-height: 1.1;
	background-color: #fff;
	color: #000000;
	font-weight: bold;
	background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
	option {
		background-color: black;
		color: white;
	}
	option:hover {
		background-color: green;
	}
`;

const Filter = ({ handleChange, handleSubmit, select }) => {
	return (
		<>
			<form onSubmit={handleSubmit}>
				<Container>
					<Select value={select} onChange={handleChange}>
						<option value="weather">Weather</option>
						<option value="boat">Boats</option>
						<option value="tresor">Treasures</option>
						<option value="harbor">Harbors</option>
					</Select>
				</Container>
			</form>
		</>
	);
};
export default Filter;
