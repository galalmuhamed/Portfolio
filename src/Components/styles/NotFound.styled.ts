import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
	background-color: ${props => props.theme.sectionBackgroundColor};
	width: 80%;
	min-height: 60vh;
	box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media only screen and (max-width: 750px) {
		& {
			flex-direction: column;
		}
	}
	& > :nth-child(1) {
		margin-right: 10px;
		display: flex;
		& > svg {
			font-size: 80px;
		}
	}
	& > :nth-child(2) {
		@media only screen and (max-width: 750px) {
			& {
				margin-top: 20px;
			}
		}
		& > p {
			font-size: 40px;
			color: ${props => props.theme.color};
			font-family: 'Mochiy Pop One', sans-serif;
			margin-bottom: 10px;
			@media only screen and (max-width: 750px) {
				& {
					font-size: 25px;
				}
			}
		}
		& > span {
			font-size: 14px;
			font-weight: bold;
			font-family: 'Mochiy Pop One', sans-serif;
			color: ${props => props.theme.color};
			& > :nth-child(1) {
				text-decoration: none;
				color: #000053;
				margin-left: 5px;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
`;
