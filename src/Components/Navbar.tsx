import React, { useState, useEffect, FC } from 'react';
import { useLocation } from 'react-router';
import { NavContainer, NavLinksContainer } from './styles/Navbar.styled';
import {
	AiFillHome,
	AiOutlineHome,
	AiFillPhone,
	AiOutlinePhone,
} from 'react-icons/ai';
import { BsBriefcaseFill, BsBriefcase, BsFillSunFill } from 'react-icons/bs';
import {
	IoIosInformationCircleOutline,
	IoIosInformationCircle,
} from 'react-icons/io';
import { BiMoon } from 'react-icons/bi';
import NavLinks from './NavLinks';

interface Props {
	dark: boolean;
	setNight: (mode: boolean) => void;
}

const Navbar: FC<Props> = ({ dark, setNight }) => {
	const [activeNav, setActiveNav] = useState('');
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === '/') {
			setActiveNav('/home');
		} else if (location.pathname.includes('/portfolio')) {
			setActiveNav('/portfolio');
		} else {
			setActiveNav(location.pathname);
		}
	}, [location.pathname]);

	return (
		<NavContainer>
			<NavLinksContainer>
				<div onClick={() => setNight(!dark)}>
					{dark ? <BsFillSunFill color="orange" /> : <BiMoon />}
				</div>
				<p>{dark ? 'Light' : 'Dark'}</p>
			</NavLinksContainer>
			<NavLinks
				to="/about"
				onClick={() => setActiveNav('/about')}
				state={activeNav === '/about'}
				Active={IoIosInformationCircle}
				NotActive={IoIosInformationCircleOutline}
				text="About"
				className="active"
			/>
			<NavLinks
				to="/"
				onClick={() => setActiveNav('/home')}
				state={activeNav === '/home'}
				Active={AiFillHome}
				NotActive={AiOutlineHome}
				text="Home"
				className="active"
			/>
			<NavLinks
				to="/portfolio"
				onClick={() => setActiveNav('/portfolio')}
				state={activeNav === '/portfolio'}
				Active={BsBriefcaseFill}
				NotActive={BsBriefcase}
				text="Portfolio"
				className="active"
			/>
			<NavLinks
				to="/contact"
				onClick={() => setActiveNav('/contact')}
				state={activeNav === '/contact'}
				Active={AiFillPhone}
				NotActive={AiOutlinePhone}
				text="Contact"
				className="active"
			/>
		</NavContainer>
	);
};

export default Navbar;
