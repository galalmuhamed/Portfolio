import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.sectionBackgroundColor};
	display: flex;
	@media only screen and (max-width: 750px) {
		& {
			flex-direction: column-reverse;
		}
	}
`;
export const Left = styled(motion.div)`
	flex: 1;
	padding: 10px;
	overflow: hidden;
	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
		border-radius: 5px;
	}
`;

export const Right = styled.div`
	flex: 1;
	padding: 20px;
	overflow: hidden;
	@media only screen and (max-width: 750px) {
		& {
			padding: 10px;
		}
	}
	& > div {
		width: 100%;
		height: calc(100% - 30px);
		display: flex;
		justify-content: center;
		color: ${props => props.theme.color};
		flex-direction: column;
		& > p {
			font-size: 14px;
			font-weight: 600;
		}
		& > a {
			color: black;
			margin-top: 10px;
			background-color: ${props => props.theme.mainBackgroundColor};
			width: fit-content;
			padding: 10px;
			border-radius: 5px;
			font-family: 'Mochiy Pop One', sans-serif;
			text-decoration: none;
			color: gray;
			box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
			&:hover {
				color: black;
			}
		}
	}
`;
