import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';

const App = () => {
    const location = useLocation();
    const state = location.state;
    console.log(state);

    let first, second, third;

    if (state.first === '1') {
        first = '#ECFFA3';
    } else if (state.first === '2') {
        first = '#AD46FF';
    } else {
        first = '#272B7D';
    }

    if (state.second === '1') {
        second = '#FEFFC3';
    } else if (state.second === '2') {
        second = '#86C5FF';
    } else {
        second = '#FC5FFF';
    }

    if (state.third === '1') {
        third = '#4AFFD4';
    } else if (state.third === '2') {
        third = '#95FFDF';
    } else {
        third = '#ED95FF';
    }

    const white = '#FEFEFE';

    const Result = styled.div`
        height: 100vh;
        width: auto;
        background-size: 100% 100%;
        background-color:#4B5B8E;
        background-image:
            radial-gradient(at 37% 26%, ${first} 0px, transparent 50%),
            radial-gradient(at 60% 75%, ${second} 0px, transparent 50%),
            radial-gradient(at 80% 31%, ${third} 0px, transparent 50%),
            radial-gradient(at 3% 72%, ${white} 0px, transparent 50%);
    `

    const Back = styled.div`
        height: 50px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const Caption = styled.div`
        margin-top: 300px;
        height: 40px;
        width: 350px;
        text-align: center;
        font-size: 30px;
        font-style: normal;
        font-family: 'Mak';
        font-weight: normal;
        color: #F2F2F2;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 10px;
        padding: 10px;
    `

    const Button = styled.button`
        font-family: 'Montserrat';
        font-weight: normal;
        font-size: 16px;
        letter-spacing: 0.1em;
        display: inline-block;
        padding: 6px 30px 6px 30px;
        position: relative;
        border: 1.5px solid #ffffff;
        border-radius: 25px;
        background: transparent;
        color: white;
        cursor: pointer;
        margin-top: 20px;
    `

return (
    <Result>
        <Back>
            <Caption>Мечтай и вдохновляй</Caption>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Button>
                    На главную
                </Button>
			</Link>
        </Back>
    </Result>
    );
}

export default App;

  