import { FC } from 'react';
import { GlobalContainer } from '../Components/styles/global.styled';
import ContactComponent from '../Components/ContactComponent';
interface Props {
	dark: boolean;
}

const Contact: FC<Props> = ({ dark }) => {
	return (
		<GlobalContainer style={{ height: 'calc(100vh - 60px)' }}>
			<ContactComponent dark={dark} />
		</GlobalContainer>
	);
};

export default Contact;
