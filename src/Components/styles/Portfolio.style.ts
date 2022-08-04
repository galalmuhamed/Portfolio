import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;
export const Box = styled(motion.div)`
	margin: 10px;
	width: 400px;
	height: 270px;
	display: flex;
	flex-direction: column;
	border-radius: 10px 10px 0 0;
	transition: 0.5s ease;
	box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
`;
export const TitleContainer = styled.div`
	flex: 0.2;
	position: relative;
	background-color: ${props => props.theme.sectionBackgroundColor};
	border-radius: 10px 10px 0 0;
	display: flex;
	justify-content: center;
	align-items: center;
	& > div {
		position: absolute;
		top: 50%;
		left: 10px;
		transform: translatey(-50%);
		display: flex;
		align-items: center;
		& > svg {
			margin: 0 3px;
			font-size: 12px;
		}
	}
	& > p {
		width: 250px;
		padding: 3px 8px;
		border-radius: 5px;
		background-color: ${props => props.theme.mainBackgroundColor};
		display: flex;
		justify-content: center;
		align-items: center;
		@media only screen and (max-width: 750px) {
			& {
				width: 200px;
			}
		}
		& > svg {
			font-size: 12px;
			margin-right: 5px;
		}
	}
`;
export const LinkTitle = styled(Link)`
	font-family: 'Montserrat', sans-serif;
	font-size: 12px;
	color: black;
	text-decoration: none;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;

export const VideoContainer = styled(Link)`
	width: 100%;
	height: 100%;
	flex: 0.8;
	font-size: 0;
	overflow: hidden;
	cursor: pointer;
	display: inline-block;
`;
