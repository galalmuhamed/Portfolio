import { useContext } from 'react';
import { GlobalContainer } from '../Components/styles/global.styled';
import {
	Container,
	Box,
	TitleContainer,
	LinkTitle,
	VideoContainer,
} from '../Components/styles/Portfolio.style';
import { BsCircleFill, BsLockFill } from 'react-icons/bs';
import HoverVideoPlayer from 'react-hover-video-player';
import { ChildPortfolio, ParentPortfolio } from '../Assets/animation/animation';
import { DataContext } from '../DataContext';
import { DataContextType } from '../types/types';
import { apiImage } from '../api/api';
const Portfolio = () => {
	const { portfolios } = useContext(DataContext) as DataContextType;
	return (
		<GlobalContainer>
			<Container variants={ParentPortfolio} initial="hidden" animate="show">
				{portfolios
					.sort(
						(a, b) =>
							Date.parse(b.createdAt as unknown as string) -
							Date.parse(a.createdAt as unknown as string)
					)
					.map((elm, idx) => (
						<Box key={idx} variants={ChildPortfolio}>
							<>
								<TitleContainer>
									<div>
										<BsCircleFill color="red" />
										<BsCircleFill color="yellow" />
										<BsCircleFill color="green" />
									</div>
									<p>
										<BsLockFill />
										<LinkTitle to={`/portfolio/${elm._id}`}>
											{elm.title}
										</LinkTitle>
									</p>
								</TitleContainer>

								<VideoContainer to={`/portfolio/${elm._id}`}>
									<HoverVideoPlayer
										videoSrc={elm.videoPreview}
										pausedOverlay={
											<img
												src={elm.thumbnail}
												alt=""
												style={{
													// Make the image expand to cover the video's dimension
													width: '100%',
													height: '100%',
													objectFit: 'cover',
												}}
											/>
										}
										loadingOverlay={
											<div className="loading-overlay">
												<div className="loading-spinner" />
											</div>
										}
									/>
								</VideoContainer>
							</>
						</Box>
					))}
			</Container>
		</GlobalContainer>
	);
};

export default Portfolio;
