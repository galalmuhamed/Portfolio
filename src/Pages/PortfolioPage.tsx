import { useContext } from 'react';
import { useParams, Navigate } from 'react-router';
import { motion } from 'framer-motion';
import { GlobalContainer } from '../Components/styles/global.styled';
import {
	Container,
	VideoContainer,
	DescriptionContainer,
	ImageContainer,
	BoxTwo,
} from '../Components/styles/PortfolioPage.styled';
import { CgScreen } from 'react-icons/cg';
import { IoServerOutline } from 'react-icons/io5';
import { AiFillYoutube, AiFillGithub } from 'react-icons/ai';
import {
	ParentPortfolioPage,
	VideoProfilePage,
	SeconProfilePage,
	LeftToRightProfilePage,
} from '../Assets/animation/animation';
import { MdOutlineDescription } from 'react-icons/md';
import Description from '../Components/Description';
import { DataContext } from '../DataContext';
import { apiImage } from '../api/api';
import { DataContextType } from '../types/types';
const PortfolioPage = () => {
	const { id } = useParams();
	const { user, portfolios } = useContext(DataContext) as DataContextType;
	const data = portfolios.find(elm => elm._id === id);

	if (!data) {
		return <Navigate to="/notfound" />;
	}

	return (
		<GlobalContainer style={{ height: 'calc(100vh - 60px)' }}>
			<Container variants={ParentPortfolioPage} initial="hidden" animate="show">
				<VideoContainer variants={VideoProfilePage}>
					<iframe
						src={data.youtubeEmbad}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</VideoContainer>
				<DescriptionContainer variants={SeconProfilePage}>
					<motion.h3 variants={LeftToRightProfilePage}>{data?.title}</motion.h3>

					<div>
						<ImageContainer variants={LeftToRightProfilePage}>
							<img
								src={apiImage + user?.coverPhoto}
								alt={user?.name as string}
							/>
						</ImageContainer>
						<BoxTwo>
							<Description
								Icon={MdOutlineDescription}
								title={`${data?.title} ${data?.description}.`}
								isLink={false}
							/>

							{data && data.technology.frontend.length > 0 && (
								<Description
									Icon={CgScreen}
									title={data.technology.frontend.join(', ')}
									isLink={false}
								/>
							)}
							{data && data.technology.backend.length > 0 && (
								<Description
									Icon={IoServerOutline}
									title={data.technology.backend.join(', ')}
									isLink={false}
								/>
							)}
							<Description
								Icon={AiFillGithub}
								title={
									data && data.resource.github
										? data.resource.github
										: 'Private Code'
								}
								isLink={true}
								href={data?.resource.github}
							/>
							<Description
								Icon={AiFillYoutube}
								title={
									data && data.resource.youtube
										? data.resource.youtube
										: 'No Youtube Video Yet'
								}
								isLink={true}
								href={data?.resource.youtube}
							/>
						</BoxTwo>
					</div>
				</DescriptionContainer>
			</Container>
		</GlobalContainer>
	);
};

export default PortfolioPage;
