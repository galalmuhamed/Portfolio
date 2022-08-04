import React, { FC } from 'react';
import { IconType } from 'react-icons';
import { Desc } from './styles/PortfolioPage.styled';
import { bottomToTopProfilePage } from '../Assets/animation/animation';

interface Props {
	Icon: IconType;
	title: string;
	isLink: boolean;
	href?: string;
}

const Description: FC<Props> = ({ Icon, title, isLink, href }) => {
	return (
		<Desc variants={bottomToTopProfilePage}>
			<div>
				<Icon />
			</div>
			{href && isLink ? (
				<a href={href} target="_black">
					{title}
				</a>
			) : (
				<p>{title}</p>
			)}
		</Desc>
	);
};

export default Description;
