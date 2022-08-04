import styled from 'styled-components';

export const NavContainer = styled.nav`
	position: sticky;
	top: 0;
	width: 300px;
	height: 60px;
	margin: 0 auto;
	background-color: ${props => props.theme.sectionBackgroundColor};
	border-radius: 0px 0px 10px 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
	z-index: 3;
	@media only screen and (max-width: 750px) {
		& {
			position: fixed;
			top: auto;
			bottom: 0;
			border-radius: 10px 10px 0px 0px;
			left: 50%;
			transform: translatex(-50%);
		}
	}
`;
//NavLinks Component
export const NavLinksContainer = styled.div`
	margin: 0 12px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& > :nth-child(1) {
		color: ${props => props.theme.color};
		text-decoration: none;
		font-size: 22px;
		display: block;
		cursor: pointer;
		&.active {
			font-size: 30px;
		}
		&:hover {
			transform: scale(1.1);
		}
	}
	& > p {
		position: absolute;
		top: 30px;
		font-size: 10px;
		padding: 3px 5px;
		display: none;
		background-color: #ffffff;
		border-radius: 5px;
		box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
	}
	&:hover p {
		display: block;
	}
	&:hover .active ~ p {
		margin-top: 5px;
	}
`;
