import * as React from 'react';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import DoneIcon from '@mui/icons-material/Done';
import { QuationContainer, FifthBackground, LabelPage, StartButton } from './styles'
import { Link, useLocation } from "react-router-dom";

function FifthPage() {
    const location = useLocation();
    const state = location.state;

	const [company, setCompany] = React.useState('');

 	return (
	<FifthBackground>
		<QuationContainer>
            <LabelPage>Джингл белс совсем близко! Какой ваш любимый новогодний напиток?</LabelPage>
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
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Глинтвейн</span>} />
                    <FormControlLabel value="2" 
                        control={<Radio 
                                    sx={{
                                        color: '#F2F2F2',
                                        '&.Mui-checked': {
                                            color: 'cyan',
                                        }}} />} 
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Какао с маршмеллоу</span>}/>
                    <FormControlLabel value="3" 
                        control={<Radio 
                                    sx={{
                                        color: '#F2F2F2',
                                        '&.Mui-checked': {
                                            color: 'cyan',
                                        }}} />} 
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Пряный чай</span>}/>
                    <FormControlLabel value="4" 
                        control={<Radio 
                                    sx={{
                                        color: '#F2F2F2',
                                        '&.Mui-checked': {
                                            color: 'cyan',
                                        }}} />} 
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Обнимашки</span>}/>
                </RadioGroup>
            </FormControl>
            <Link to="/result" state={{ ...state, fifth: company }} style={{ textDecoration: 'none' }}>
                { company ? 
                (
                    <StartButton>
                        Создать
                    </StartButton>
                ) : (<></>) }
                
            </Link>
		</QuationContainer>
	</FifthBackground>
  );
}

export default FifthPage;
