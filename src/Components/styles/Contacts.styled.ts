import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.sectionBackgroundColor};
	padding: 20px;
	@media only screen and (max-width: 750px) {
		& {
			padding: 10px;
		}
	}
`;
export const Box = styled.div`
	width: 100%;
	height: calc(100% - 30px);
	display: flex;
	@media only screen and (max-width: 750px) {
		& {
			flex-direction: column;
		}
	}
`;
export const Left = styled.div`
	flex: 1;
`;
export const ParentRight = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	@media only screen and (max-width: 750px) {
		& {
			justify-content: space-around;
		}
	}
	& > p {
		font-size: 35px;
		font-family: 'Mochiy Pop One', sans-serif;
		color: ${props => props.theme.color};
		@media only screen and (max-width: 750px) {
			& {
				font-size: 30px;
			}
		}
	}
`;
export const CenterBox = styled.div`
	& > p {
		font-size: 18px;
		font-family: 'Mochiy Pop One', sans-serif;
		color: ${props => props.theme.color};
		@media only screen and (max-width: 750px) {
			& {
				font-size: 16px;
			}
		}
	}
	& > div {
		display: flex;
		align-items: center;
		margin-top: 15px;
		color: ${props => props.theme.color};
		& > a {
			color: black;
			margin-left: 5px;
			font-size: 12px;
			font-weight: bold;
			text-decoration: none;
			color: ${props => props.theme.color};
			&:hover {
				text-decoration: underline;
			}
		}
	}
`;

export const LinksContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	& > div {
		margin: 0 20px;

		@media only screen and (max-width: 750px) {
			& {
				margin: 0 10px;
			}
		}
		& > a {
			text-decoration: none;
			color: black;
			font-size: 35px;
			color: ${props => props.theme.color};
		}
	}
`;

export const Right = styled.div`
	flex: 1;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	@media only screen and (max-width: 750px) {
		& {
			align-items: flex-start;
		}
	}
`;
export const FormContainer = styled(motion.form)`
	width: 100%;
`;
interface Props {
	state: number;
}
export const FormGroup = styled(motion.div)<Props>`
	position: relative;
	width: 80%;
	height: 50px;
	margin: 40px 0;
	box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	align-items: center;
	@media only screen and (max-width: 750px) {
		& {
			width: 100%;
		}
	}
	& > label {
		position: absolute;
		top: ${props => (props.state > 0 ? '10px' : '50%')};
		left: 20px;
		transform: translatey(-50%);
		font-family: 'Mochiy Pop One', sans-serif;
		font-size: ${props => (props.state > 0 ? '12px' : '18px')};
		transition: 0.2s linear;
		color: ${props => props.theme.color};
	}
	& > input,
	& > textarea {
		width: 100%;
		height: 100%;
		outline: none;
		border: none;
		background-color: ${props => props.theme.mainBackgroundColor};
		border-radius: 10px;
		padding: ${props => (props.state > 0 ? '15px 20px 0 20px' : '0 0 0 20px')};
		font-size: 18px;
	}
	& > textarea {
		resize: none;
	}
`;
interface Props2 {
	left: number;
}
export const FormGroup2 = styled(FormGroup)<Props2>`
	height: ${props => (props.state > 0 ? '100px' : '50px')};
	transition: 0.2s linear;
	& > textarea {
		padding: ${props =>
			props.state > 0 ? '15px 20px 0 20px' : '10px 0 0 20px'};
	}
	& > div {
		float: right;
		margin-right: 10px;
		font-family: 'Mochiy Pop One', sans-serif;
		color: ${props =>
			props.left < 30 && props.left > 20
				? 'green'
				: props.left < 20 && props.left > 10
				? 'yellow'
				: 'red'};
	}
	${FormGroup}
`;

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
`;
export const Button = styled(motion.button)`
	outline: none;
	border: none;
	background-color: ${props => props.theme.mainBackgroundColor};
	color: ${props => props.theme.color};
	border-radius: 10px;
	box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
	padding: 10px 15px;
	font-family: 'Mochiy Pop One', sans-serif;
	cursor: pointer;
	transition: 0.5s ease;
	&:hover {
		transform: scale(1.1);
	}
`;
export const Error = styled.div`
	background-color: #ff0000bd;
	margin-bottom: 15px;
	margin-top: -15px;
	width: 80%;
	padding: 10px;
	text-align: center;
	box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	font-family: 'Montserrat', sans-serif;
	@media only screen and (max-width: 750px) {
		& {
			width: 100%;
		}
	}
`;
