import * as React from 'react';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import DoneIcon from '@mui/icons-material/Done';
import { QuationContainer, FourthBackground, LabelPage, StartButton } from './styles'
import { Link, useLocation } from "react-router-dom";

function FourthPage() {
    const location = useLocation();
    const state = location.state;

	const [company, setCompany] = React.useState('');

 	return (
	<FourthBackground>
		<QuationContainer>
            <LabelPage>Какая цитата лучше всего описывает вас?</LabelPage>
            <FormControl sx={{ marginBottom: '30px', width: '300px' }}>
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
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Кто испытал наслаждение творчества, для того все другие наслаждения уже не существуют. (А. Чехов)</span>} />
                    <FormControlLabel value="2" sx={{marginBottom: '20px'}}
                        control={<Radio 
                                    sx={{
                                        color: '#F2F2F2',
                                        '&.Mui-checked': {
                                            color: 'cyan',
                                        }}} />} 
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Начинать всегда стоит с того, что сеет сомнения. (Б. Стругацкий)</span>}/>
                    <FormControlLabel value="3" 
                        control={<Radio 
                                    sx={{
                                        color: '#F2F2F2',
                                        '&.Mui-checked': {
                                            color: 'cyan',
                                        }}} />} 
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Как прекрасно, что не нужно ждать ни минуты, чтобы начать делать мир лучше. (А. Франк)</span>}/>
                </RadioGroup>
            </FormControl>
            <Link to="/fifth" state={{ ...state, fourth: company }} style={{ textDecoration: 'none' }}>
                { company ? 
                (
                    <StartButton>
                        Далее
                    </StartButton>
                ) : (<></>) }
                
            </Link>
		</QuationContainer>
	</FourthBackground>
  );
}

export default FourthPage;
