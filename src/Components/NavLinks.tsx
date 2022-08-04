import React, { FC } from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import { NavLinksContainer } from './styles/Navbar.styled';

interface Props {
	to: string;
	state: boolean;
	Active: IconType;
	NotActive: IconType;
	onClick: () => any;
	text: string;
	className: string;
}

const NavLinks: FC<Props> = ({
	to,
	state,
	Active,
	NotActive,
	onClick,
	text,
	className,
}) => {
	return (
		<NavLinksContainer>
			<Link to={to} onClick={onClick} className={state ? className : ''}>
				{state ? <Active /> : <NotActive />}
			</Link>
			<p>{text}</p>
		</NavLinksContainer>
	);
};

export default NavLinks;
