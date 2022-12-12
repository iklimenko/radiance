import * as React from 'react';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import DoneIcon from '@mui/icons-material/Done';
import { QuationContainer, StartButton, LabelPage } from './styles'
import { Link } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import styled from 'styled-components';
import back1 from './back1.svg';

export const FirstBackground = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${back1});
    background-size: cover;
`

function FirstPage() {

	const [company, setCompany] = React.useState('');

 	return (
	<FirstBackground>
		<QuationContainer>
            <LinearProgress sx={{ marginTop: '10px', color: 'white' }} variant="determinate" value={40} />
            <LabelPage>Что бы вы выбрали?</LabelPage>
            <FormControl sx={{ marginBottom: '30px', width: '300px' }}>
                <RadioGroup
                    sx={{color: '#272B7D'}}
                    value={company}
                    onChange={(event) => {
                        setCompany(event.target.value);
                    }}>
                    <FormControlLabel value="1" 
                        control={<Radio 
                                    sx={{
                                        color: '#272B7D',
                                        '&.Mui-checked': {
                                            color: 'cyan',
                                        }}} />} 
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Орел</span>} />
                    <FormControlLabel value="2" 
                        control={<Radio 
                                    sx={{
                                        color: '#272B7D',
                                        '&.Mui-checked': {
                                            color: 'cyan',
                                        }}} />} 
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Решка</span>}/>
                    <FormControlLabel value="3" 
                        control={<Radio 
                                    sx={{
                                        color: '#272B7D',
                                        '&.Mui-checked': {
                                            color: 'cyan',
                                        }}} />} 
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Ребро</span>}/>
                </RadioGroup>
            </FormControl>

            <Link to="/second" state={{ first: company }} style={{ textDecoration: 'none' }}>
                { company ? 
                (
                    <StartButton>
                        Далее
                    </StartButton>
                ) : (<></>) }
                
            </Link>
		</QuationContainer>
	</FirstBackground>
  );
}

export default FirstPage;
