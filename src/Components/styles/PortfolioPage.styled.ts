import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
	width: 80%;
	height: 100%;
	margin: 0 auto;
	@media only screen and (max-width: 750px) {
		& {
			width: 95%;
		}
	}
`;
export const VideoContainer = styled(motion.div)`
	width: 100%;
	height: 300px;
	background-color: black;
	border-radius: 10px;
	overflow: hidden;
	& > video,
	& > iframe {
		display: block;
		width: 100%;
		height: 100%;
	}
`;

export const DescriptionContainer = styled(motion.div)`
	background-color: ${props => props.theme.sectionBackgroundColor};
	padding: 20px;
	margin-top: 20px;
	border-radius: 10px;

	@media only screen and (max-width: 750px) {
		& {
			padding: 10px;
		}
	}
	& > div {
		margin-top: 15px;
		display: flex;
	}
	& > h3 {
		font-family: 'Mochiy Pop One', sans-serif;
		color: ${props => props.theme.color};
	}
`;
export const ImageContainer = styled(motion.div)`
	flex: 0.1;
	display: flex;
	justify-content: center;
	& > img {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		object-fit: cover;
		object-position: top;
		box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
	}
`;

export const BoxTwo = styled.div`
	flex: 0.9;
	margin-left: 10px;
`;
//DescriptionComponant

export const Desc = styled(motion.div)`
	display: flex;
	margin: 13px 0;
	align-items: center;
	& > div {
		width: 30px;
		display: flex;
		align-items: center;
		margin-right: 8px;
		& > svg {
			font-size: 25px;
			color: ${props => props.theme.color};
		}
	}

	& > p {
		font-size: 14px;
		font-family: 'Montserrat', sans-serif;
		color: ${props => props.theme.color};
	}
	& > a {
		color: ${props => props.theme.color};
		font-size: 10px;
		text-decoration: none;
		font-family: 'Montserrat', sans-serif;
		&:hover {
			text-decoration: underline;
		}
	}
`;
