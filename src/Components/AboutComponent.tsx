import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Container, Left, Right } from './styles/About.styled';
import { ParentAbout, LeftAboutAnimate } from '../Assets/animation/animation';
import { DataContext } from '../DataContext';
import { DataContextType } from '../types/types';
import TitleComponent from './TitleComponent';

const AboutComponent = () => {
	const file = require('../Assets/resume.pdf');

	const { user } = useContext(DataContext) as DataContextType;

	return (
		<Container variants={ParentAbout} initial="hidden" whileInView="show">
			<Left>
				<motion.img
					src={user?.img}
					alt={user?.name as string}
					variants={LeftAboutAnimate}
				/>
			</Left>
			<Right>
				<TitleComponent title="About" />
				<motion.div variants={LeftAboutAnimate}>
					<p>{user?.description}</p>
					<a href={file} download="resume" target="_blank" rel="noreferrer">
						Download
					</a>
				</motion.div>
			</Right>
		</Container>
	);
};

export default AboutComponent;
