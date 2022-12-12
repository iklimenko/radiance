import styled from 'styled-components';
import back from './back.png';
import back1 from './back1.png';
import back2 from './back2.png';
import back3 from './back3.png';
import back4 from './back4.png';
import back5 from './back5.png';
import { createGlobalStyle } from 'styled-components';
import Mak from './MAK.otf';
import Montserrat from './Montserrat.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Mak';
    src: url(${Mak}) format('opentype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
`


export const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${back}) ;
    background-size: cover;
    backgroud-color: #86C5FF;
`

export const FirstBackground = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${back1});
    background-size: cover;
    backgroud-color: #86C5FF;
`

export const SecondBackground = styled.div`
    height: 100vh;
    width: auto;
    background-image: url(${back2});
    background-size: cover;
    backgroud-color: #86C5FF;
`

export const FourthBackground = styled.div`
    height: 100vh;
    width: auto;
    background-image: url(${back4});
    background-size: cover;
    backgroud-color: #86C5FF;
`

export const FifthBackground = styled.div`
    height: 100vh;
    width: auto;
    background-image: url(${back5});
    background-size: cover;
    backgroud-color: #86C5FF;
`

export const ThirdBackground = styled.div`
    height: 100vh;
    width: auto;
    background-image: url(${back3});
    background-size: cover;
    backgroud-color: #86C5FF;
`

export const MainContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const QuationContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Montserrat';
`

export const Paragraph = styled.div`
    height: auto;
    width: auto;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-family: 'Mak';
    font-weight: normal;
    margin: 90% 10px 30px 10px;
    color: #F2F2F2;
`

export const LabelPage = styled.div`
    height: auto;
    width: auto;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-family: 'Mak';
    font-weight: normal;
    margin: 40% 10px 40px 10px;
    color: #F2F2F2;
`

export const StartButton = styled.button`
    font-family: 'Montserrat';
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.1em;
    display: inline-block;
    padding: 6px 30px 6px 30px;
    position: relative;
    border: 1.5px solid #F2F2F2;
    border-radius: 25px;
    background: transparent;
    color: #F2F2F2;
    cursor: pointer;
`

