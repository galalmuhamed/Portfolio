import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SectionOne = styled.section`
	background-color: ${props => props.theme.sectionBackgroundColor};
	width: 80%;
	margin: 0 auto;
	padding: 10px;
	border-radius: 10px;
	display: flex;
	@media only screen and (max-width: 750px) {
		& {
			width: 90%;
			flex-direction: column;
		}
	}
`;
export const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const Header = styled(motion.div)`
	width: 300px;
	font-size: 35px;
`;
export const Paragraph = styled(motion.p)`
	font-family: 'Mochiy Pop One', sans-serif;
	line-height: 1.6;
	color: ${props => props.theme.color};
`;

export const TitleContainer = styled(motion.ul)`
	margin-top: 10px;
	list-style: none;
	width: 300px;
	height: 50px;
	line-height: 50px;
	overflow: hidden;
`;
export const TitleList = styled(motion.li)`
	font-size: 35px;
	font-family: 'Mochiy Pop One', sans-serif;
	color: ${props => props.theme.color};
`;

export const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	& > div {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 400px;
		height: 300px;
		overflow: hidden;
		@media only screen and (max-width: 750px) {
			& {
				width: 300px;
				height: 200px;
			}
		}
		& > img {
			width: 100%;
			animation: rotate360 10s linear 2s infinite;
			&:hover {
				animation-play-state: paused;
			}
		}
	}
	@keyframes rotate360 {
		0% {
			transform: rotate(0deg);
		}
		15% {
			transform: rotate(90deg);
		}
		30% {
			transform: rotate(180deg);
		}
		45% {
			transform: rotate(270deg);
		}
		60%,
		100% {
			transform: rotate(360deg);
		}
	}
`;
//about
export const AboutSection = styled.section`
	margin-top: 15px;
	width: 100%;
	height: 80vh;
`;
//skills
export const SkillsContainer = styled.div`
	width: 80%;
	margin: 0 auto;
	margin-top: 15px;
	padding: 20px;
	background-color: ${props => props.theme.sectionBackgroundColor};
	border-radius: 10px;
	@media only screen and (max-width: 750px) {
		& {
			width: 90%;
			padding: 15px;
		}
	}
`;
export const SLiderContainer = styled.div`
	margin-top: 10px;
	& .slick-prev {
		left: 0;
		width: 40px;
		height: 60px;
		background-color: #a9a9a994;
		z-index: 1;
		box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
		border-radius: 0 5px 5px 0;
	}
	& .slick-next {
		right: 0;
		width: 40px;
		height: 60px;
		background-color: #a9a9a994;
		z-index: 1;
		box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
		border-radius: 5px 0 0 5px;
	}
	& .slick-slide {
		width: 60px;
	}
`;

//Contacts Section

export const ContactsSection = styled.section`
	width: 100%;
	height: 90vh;
	margin-top: 15px;
`;
