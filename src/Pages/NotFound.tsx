import { Link } from 'react-router-dom';
import { GlobalContainer } from '../Components/styles/global.styled';
import { Container } from '../Components/styles/NotFound.styled';
import { AiFillWarning } from 'react-icons/ai';
import {
	ParentNotFound,
	ChildNotFound,
	Child2NotFound,
} from '../Assets/animation/animation';
import { motion } from 'framer-motion';

const NotFound = () => {
	return (
		<GlobalContainer
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Container variants={ParentNotFound} initial="hidden" animate="show">
				<motion.div variants={ChildNotFound}>
					<AiFillWarning color="red" />
				</motion.div>
				<motion.div variants={Child2NotFound}>
					<p>Page Not Found...</p>
					<span>
						Go to
						<Link to="/"> Home...</Link>
					</span>
				</motion.div>
			</Container>
		</GlobalContainer>
	);
};

export default NotFound;
