import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AppContainer = styled.div`
	min-height: 100vh;
	background-color: ${props => props.theme.mainBackgroundColor};
`;

// title component shared
export const TitleContainer = styled(motion.p)`
	font-size: 25px;
	color: ${props => props.theme.color};
	font-family: 'Montserrat', sans-serif;
	height: 30px;
	width: fit-content;
`;
//Footer
export const FooterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Montserrat', sans-serif;
	font-size: 10px;
	padding: 10px;
	color: ${props => props.theme.color};
	font-style: italic;
	letter-spacing: 2px;
	& > :nth-child(1) {
		margin-right: 5px;
		font-size: 16px;
	}
	@media only screen and (max-width: 750px) {
		& {
			letter-spacing: 0;
		}
	}
`;
export const FakeElement = styled.div`
	height: 60px;
	width: 100%;
	display: none;
	@media only screen and (max-width: 750px) {
		& {
			display: block;
		}
	}
`;

// loadingCOntainer =

export const LoadingContainer = styled.div`
	background-color: ${props => props.theme.mainBackgroundColor};
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
`;
