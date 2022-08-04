import { FC } from 'react';
import { GlobalContainer } from '../Components/styles/global.styled';
import {
	SectionOne,
	Left,
	Header,
	Paragraph,
	TitleContainer,
	TitleList,
	Right,
	AboutSection,
	ContactsSection,
} from '../Components/styles/Dashboard.styled';
import {
	animateTitle,
	animateChildrenTitle,
	animateListTitles,
	animateChildrenListTitle,
} from '../Assets/animation/animation';

import { titles, skillsIHave, skillsIwillLearn } from '../Assets/utils/data';
import AboutComponent from '../Components/AboutComponent';
import Skills from '../Components/Skills';
import ContactComponent from '../Components/ContactComponent';
interface Props {
	dark: boolean;
}

const Dashboard: FC<Props> = ({ dark }) => {
	const blackLogo = require('../Assets/logo/blacktextlogo.png');
	const whiteLogo = require('../Assets/logo/whitetextlogo.png');

	return (
		<GlobalContainer>
			<SectionOne>
				<Left>
					<Header variants={animateTitle} initial="hidden" animate="show">
						<Paragraph variants={animateChildrenTitle}>Hi,</Paragraph>
						<Paragraph variants={animateChildrenTitle}>Im, Galal</Paragraph>
					</Header>
					<TitleContainer
						variants={animateListTitles}
						initial="hidden"
						animate="show"
					>
						{titles.map((elm, idx) => (
							<TitleList variants={animateChildrenListTitle} key={idx}>
								{elm.name}
							</TitleList>
						))}
					</TitleContainer>
				</Left>
				<Right>
					<div>
						<img src={dark ? whiteLogo : blackLogo} alt="logo" />
					</div>
				</Right>
			</SectionOne>
			<AboutSection>
				<AboutComponent />
			</AboutSection>
			<Skills title="Skills" data={skillsIHave} />
			<Skills title="Skills I will Learn" data={skillsIwillLearn} />
			<ContactsSection>
				<ContactComponent dark={dark} />
			</ContactsSection>
		</GlobalContainer>
	);
};

export default Dashboard;
