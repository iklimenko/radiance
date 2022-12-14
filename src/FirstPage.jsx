import * as React from 'react';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import DoneIcon from '@mui/icons-material/Done';
import { QuationContainer, FirstBackground, StartButton, LabelPage } from './styles'
import { Link } from "react-router-dom";

function FirstPage() {

	const [company, setCompany] = React.useState('');

 	return (
	<FirstBackground>
		<QuationContainer>
            <LabelPage>Что бы вы выбрали?</LabelPage>
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
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Орел</span>} />
                    <FormControlLabel value="2" 
                        control={<Radio 
                                    sx={{
                                        color: '#F2F2F2',
                                        '&.Mui-checked': {
                                            color: 'cyan',
                                        }}} />} 
                        label={<span style={{ fontSize: 16, fontFamily: 'Montserrat' }}>Решка</span>}/>
                    <FormControlLabel value="3" 
                        control={<Radio 
                                    sx={{
                                        color: '#F2F2F2',
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
