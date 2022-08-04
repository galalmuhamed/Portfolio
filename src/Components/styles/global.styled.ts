import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing:border-box;
	font-family: 'Poppins', sans-serif;
	
}

`;
export default GlobalStyle;

//global Container for all my routes

export const GlobalContainer = styled.div`
	width: 100%;
	min-height: calc(100vh - 60px);
	padding-top: 10px;
`;

/*
font-family: 'Mochiy Pop One', sans-serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Poppins', sans-serif;

maincolor :light mode
backgroundColor:#F8EFED
color:black
backgroundColor section:white

main color:Dark Mode
backgroundColor:#B7B7B7
color:white
backgroundColor section:#434343
*/

export const lightTheme = {
	mainBackgroundColor: '#F8EFED',
	color: 'black',
	sectionBackgroundColor: 'white',
	loadingBackgound: '5px solid rgba(0, 0, 0, 0.2)',
	loading: '5px solid black',
};

export const darkTheme = {
	mainBackgroundColor: '#B7B7B7',
	color: 'white',
	sectionBackgroundColor: '#434343',
	loadingBackgound: '5px solid rgba(255, 255, 255, 0.2)',
	loading: '5px solid white',
};
