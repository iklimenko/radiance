import * as React from 'react';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import DoneIcon from '@mui/icons-material/Done';
import { QuationContainer, SecondBackground, LabelPage, StartButton } from './styles'
import { Link, useLocation } from "react-router-dom";

function SecondPage() {
    const location = useLocation();
    const state = location.state;
	const [company, setCompany] = React.useState('');

 	return (
	<SecondBackground>
		<QuationContainer>
            <LabelPage>Какой мерч вы бы хотели получить?</LabelPage>
            <FormControl sx={{ marginBottom: '30px', width: '300px' }}>
                <RadioGroup
                    sx={{color: '#F2F2F2'}}
                    value={company}
                    onChange={(event) => {
                        setCompany(event.target.value);
                    }}>
                    <FormControlLabel value="1" 
                        control={<Radio 
                                    sx={{
                                        color: '#F2F2F2',
                                        '&.Mui-checked': {
                                            color: 'cyan',
                                        }}} />} 
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Стильное худи</span>} />
                    <FormControlLabel value="2" 
                        control={<Radio 
                                    sx={{
                                        color: '#F2F2F2',
                                        '&.Mui-checked': {
                                            color: 'cyan',
                                        }}} />} 
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Оверсайз футболка</span>}/>
                    <FormControlLabel value="3" 
                        control={<Radio 
                                    sx={{
                                        color: '#F2F2F2',
                                        '&.Mui-checked': {
                                            color: 'cyan',
                                        }}} />} 
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Удобный анорак</span>}/>
                </RadioGroup>
            </FormControl>
            <Link to="/third" state={{ ...state, second: company }} style={{ textDecoration: 'none' }}>
                { company ? 
                (
                    <StartButton>
                        Далее
                    </StartButton>
                ) : (<></>) }
                
            </Link>
		</QuationContainer>
	</SecondBackground>
  );
}

export default SecondPage;
