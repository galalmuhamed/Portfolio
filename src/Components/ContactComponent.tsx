import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import {
	Container,
	Box,
	Left,
	ParentRight,
	CenterBox,
	LinksContainer,
	Right,
	FormContainer,
	FormGroup,
	FormGroup2,
	Error,
	ButtonContainer,
	Button,
} from './styles/Contacts.styled';
import {
	AiOutlineMail,
	AiFillYoutube,
	AiFillGithub,
	AiFillLinkedin,
} from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import {
	ParentContact,
	AnimateChildContact1,
	AnimateChildContact2,
	AnimateChildContact3,
	ChildRightAnimated,
} from '../Assets/animation/animation';
import { api } from '../api/api';
import TitleComponent from './TitleComponent';
import Loading from './Loading';
interface Props {
	dark: boolean;
}

const ContactComponent: FC<Props> = ({ dark }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [checkMark, setCheckMark] = useState(false);

	const addContact = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		try {
			if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
				setError("Name, Email and Message Can't Be Empty");
				setLoading(false);
				return;
			} else if (name.length <= 2) {
				setError('Name has to Be More Than Two Character');
				setLoading(false);
				return;
			} else if (message.length <= 2) {
				setError('message has to Be More Than Two Character');
				setLoading(false);
				return;
			}
			const res = await api.post('/send', { name, email, message });
			if (res.data === 'error') {
				setError('Error Try Another Time');
				setLoading(false);
				setName('');
				setEmail('');
				setMessage('');
				return;
			}
			setName('');
			setEmail('');
			setMessage('');
			setError('');
			setLoading(false);
			setCheckMark(true);
			setTimeout(() => {
				setCheckMark(false);
			}, 3000);
		} catch (err) {
			setError('Something Want Wrong');
			console.log(err);
		}
	};
	const left = 100 - message.length;
	return (
		<Container>
			<TitleComponent title="Contact" />
			<Box>
				<Left>
					<ParentRight
						variants={ParentContact}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.3 }}
					>
						<motion.p variants={AnimateChildContact1}>Get in Touch</motion.p>
						<CenterBox>
							<motion.p variants={AnimateChildContact2}>
								Want to work together or have any questions?
							</motion.p>
							<motion.div variants={AnimateChildContact2}>
								<AiOutlineMail />
								<a href="mailto:galal.mohamed700@outlook.com">
									galal.mohamed700@outlook.com
								</a>
							</motion.div>
						</CenterBox>
						<LinksContainer>
							<motion.div variants={AnimateChildContact3}>
								<a
									href="https://github.com/galalmuhamed"
									target={'_blank'}
									rel="noreferrer"
								>
									<AiFillGithub />
								</a>
							</motion.div>
							<motion.div variants={AnimateChildContact3}>
								<a
									href="https://www.linkedin.com/in/galalmuhamed/"
									target={'_blank'}
									rel="noreferrer"
								>
									<AiFillLinkedin />
								</a>
							</motion.div>
							<motion.div variants={AnimateChildContact3}>
								<a
									href="https://www.youtube.com/channel/UCFmM4nuJbESeEIdWWTTAW8g"
									target={'_blank'}
									rel="noreferrer"
								>
									<AiFillYoutube />
								</a>
							</motion.div>
						</LinksContainer>
					</ParentRight>
				</Left>
				<Right>
					<FormContainer
						variants={ParentContact}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.3 }}
						onSubmit={addContact}
					>
						<FormGroup state={name.length} variants={ChildRightAnimated}>
							<label htmlFor="name">Name</label>
							<input
								id="name"
								type={'text'}
								value={name}
								onChange={e => setName(e.target.value)}
								maxLength={20}
							/>
						</FormGroup>
						<FormGroup state={email.length} variants={ChildRightAnimated}>
							<label>Email</label>
							<input
								type="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								maxLength={35}
							/>
						</FormGroup>
						<FormGroup2
							state={message.length}
							left={left}
							variants={ChildRightAnimated}
						>
							<label htmlFor="message">Message</label>
							<textarea
								id="message"
								value={message}
								onChange={e => setMessage(e.target.value)}
								maxLength={100}
							/>
							{left < 30 && <div>{left}</div>}
						</FormGroup2>
						{error && <Error>{error}</Error>}

						<ButtonContainer>
							<Button type="submit" variants={ChildRightAnimated}>
								Hit Me Up
							</Button>
							{loading && (
								<div style={{ marginLeft: '10px' }}>
									<Loading dark={dark} size={12} where="contact" />
								</div>
							)}
							{!loading && checkMark && (
								<BsCheckLg
									style={{
										marginLeft: '8px',
										color: '#00FF00',
										fontSize: '20px',
									}}
								/>
							)}
						</ButtonContainer>
					</FormContainer>
				</Right>
			</Box>
		</Container>
	);
};

export default ContactComponent;
