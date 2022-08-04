import React from 'react';
import { GlobalContainer } from '../Components/styles/global.styled';
import AboutComponent from '../Components/AboutComponent';

const About = () => {
	return (
		<GlobalContainer style={{ height: 'calc(100vh - 60px)' }}>
			<AboutComponent />
		</GlobalContainer>
	);
};

export default About;
