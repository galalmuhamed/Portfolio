import { FC } from 'react';
import { SkillsContainer, SLiderContainer } from './styles/Dashboard.styled';
import { Data } from '../Assets/utils/data';
import TitleComponent from './TitleComponent';
import Slider from 'react-slick';

interface Props {
	data: Data[];
	title: string;
}

const Skills: FC<Props> = ({ data, title }) => {
	const settings = {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		variableWidth: true,
	};
	const settings2 = {
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 3,
		variableWidth: true,
	};

	return (
		<SkillsContainer>
			<TitleComponent title={title} />
			<SLiderContainer>
				<Slider {...(data.length > 10 ? settings : settings2)}>
					{data.map((elm, idx) => (
						<img src={elm.name} alt="" key={idx} />
					))}
				</Slider>
			</SLiderContainer>
		</SkillsContainer>
	);
};

export default Skills;
/*
<SkillsContainer>
			<SkillsTitle>Skills</SkillsTitle>
		</SkillsContainer>
*/
