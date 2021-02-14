import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
	background-color: black;
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 3vh;
`;
const Text = styled.div`
	color: white;
	font-size: 12px;
	margin-top: 4px;
`;
function Footer() {
	return (
		<FooterContainer>
			<Text>&copy; Wildcodeschool.com | Designed by Pirates</Text>
		</FooterContainer>
	);
}
export default Footer;
