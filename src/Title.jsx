import './App.css';
import * as React from 'react';
import { MainContainer, Paragraph, Background, StartButton } from './styles'
import { Link } from "react-router-dom";

function App() {
 	return (
	<Background>
		<MainContainer>
			<Paragraph>Таня, раскрой мысли</Paragraph>
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
