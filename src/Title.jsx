import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { MainContainer, Paragraph, Background, StartButton, GlobalStyle } from './styles'
import { Link, useLocation } from "react-router-dom";

function App() {
 	return (
	<Background>
		<MainContainer>
			<Paragraph>Создай свое северное сияние</Paragraph>
			<Link to="/first" style={{ textDecoration: 'none' }}>
				<StartButton>
					Вперед
				</StartButton>
			</Link>
		</MainContainer>
	</Background>
  );
}

export default App;
