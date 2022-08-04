import React, { FC } from 'react';
import { TitleContainer } from './styles/App.styled';

interface Props {
	title: string;
}

//style at the App.styled.ts Shared Component

const TitleComponent: FC<Props> = ({ title }) => {
	return (
		<TitleContainer
			initial={{ opacity: 0, x: 1000, rotate: -45 }}
			animate={{
				opacity: 1,
				x: 0,
				rotate: [45, 45, -45, -45, 45, 45, 0],
			}}
			transition={{
				type: 'tween',
				duration: 4,
			}}
		>
			{title}
		</TitleContainer>
	);
};

export default TitleComponent;
