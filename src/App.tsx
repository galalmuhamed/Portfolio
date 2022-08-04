import { useState, useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GlobalStyle, {
	lightTheme,
	darkTheme,
} from './Components/styles/global.styled';
import {
	AppContainer,
	FakeElement,
	LoadingContainer,
} from './Components/styles/App.styled';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashboard';
import Portfolio from './Pages/Portfolio';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import PortfolioPage from './Pages/PortfolioPage';
import NotFound from './Pages/NotFound';
import Loading from './Components/Loading';
import { DataContext } from './DataContext';
import { DataContextType } from './types/types';

const App = () => {
	const { isLoading, getAllData } = useContext(DataContext) as DataContextType;
	const [dark, setDark] = useState<boolean>(false);

	useEffect(() => {
		getAllData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const setNight = (mode: boolean) => {
		localStorage.setItem('dark', JSON.stringify({ dark: mode }));
		setDark(mode);
	};

	useEffect(() => {
		const getLocal = localStorage.getItem('dark');
		if (getLocal) {
			setDark(JSON.parse(getLocal).dark);
		}
	}, []);

	return (
		<ThemeProvider theme={dark ? darkTheme : lightTheme}>
			<AppContainer>
				<GlobalStyle />
				{isLoading ? (
					<LoadingContainer>
						<Loading where="home" dark={dark} size={70} />
					</LoadingContainer>
				) : (
					<>
						<Navbar dark={dark} setNight={setNight} />
						<Routes>
							<Route path="/" element={<Dashboard dark={dark} />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact dark={dark} />} />
							<Route path="/portfolio" element={<Portfolio />} />
							<Route path="/portfolio/:id" element={<PortfolioPage />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
						<Footer />
						<FakeElement></FakeElement>
					</>
				)}
			</AppContainer>
		</ThemeProvider>
	);
};

export default App;
