import { FooterContainer } from './styles/App.styled';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

//Footer Style at App.styled.ts
const Footer = () => {
	return (
		<FooterContainer>
			<AiOutlineCopyrightCircle />
			2022 Made With Love By Galal Mohamed, All Right Reserved
		</FooterContainer>
	);
};

export default Footer;
