import * as React from 'react';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import DoneIcon from '@mui/icons-material/Done';
import { QuationContainer, ThirdBackground, LabelPage, StartButton } from './styles'
import { Link, useLocation } from "react-router-dom";

function ThirdPage() {

    const location = useLocation();
    const state = location.state;
	const [company, setCompany] = React.useState('');

 	return (
	<ThirdBackground>
		<QuationContainer>
            <LabelPage>Чем бы вы хотели заняться?</LabelPage>
            <FormControl sx={{ marginBottom: '30px', width: '300px'}}>
                <RadioGroup
                    sx={{color: '#F2F2F2'}}
                    value={company}
                    onChange={(event) => {
                        setCompany(event.target.value);
                    }}>
                    <FormControlLabel value="1" sx={{marginBottom: '20px'}}
                        control={<Radio 
                                    sx={{
                                        color: '#F2F2F2',
                                        '&.Mui-checked': {
                                            color: 'cyan',
                                        }}} />} 
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Заполнять волонтерские книжки своих друзей, чтобы у них была стипендия</span>} />
                    <FormControlLabel value="2" sx={{marginBottom: '20px'}}
                        control={<Radio 
                                    sx={{
                                        color: '#F2F2F2',
                                        '&.Mui-checked': {
                                            color: 'cyan',
                                        }}} />} 
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Увеличить количество часов в сутках, чтобы успеть выучить культуру всех народов России</span>}/>
                    <FormControlLabel value="3" 
                        control={<Radio 
                                    sx={{
                                        color: '#F2F2F2',
                                        '&.Mui-checked': {
                                            color: 'cyan',
                                        }}} />} 
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Выиграть грант, чтобы реализовать свой проект</span>}/>
                </RadioGroup>
            </FormControl>
            <Link to="/fourth" state={{ ...state, third: company }} style={{ textDecoration: 'none' }}>
                { company ? 
                (
                    <StartButton>
                        Далее
                    </StartButton>
                ) : (<></>) }
                
            </Link>
		</QuationContainer>
	</ThirdBackground>
  );
}

export default ThirdPage;
