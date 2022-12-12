import styled from 'styled-components';
import back from './back.svg';
import back1 from './back1.svg';
import back2 from './back2.svg';
import back3 from './back3.svg';
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
    height: 100vh;
    width: auto;
    background-image: url(${back});
    background-size: 100% 100%;
`

export const FirstBackground = styled.div`
    height: 100vh;
    width: auto;
    background-image: url(${back1});
    background-size: 100% 100%;
`

export const SecondBackground = styled.div`
    height: 100vh;
    width: auto;
    background-image: url(${back2});
    background-size: 100% 100%;
`

export const ThirdBackground = styled.div`
    height: 100vh;
    width: auto;
    background-image: url(${back3});
    background-size: 100% 100%;
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
    margin: 300px 10px 30px 10px;
    color: #272B7D;
`

export const LabelPage = styled.div`
    height: auto;
    width: auto;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-family: 'Mak';
    font-weight: normal;
    margin: 250px 10px 40px 10px;
    color: #272B7D;
`

export const StartButton = styled.button`
    font-family: 'Montserrat';
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.1em;
    display: inline-block;
    padding: 6px 30px 6px 30px;
    position: relative;
    border: 1.5px solid #272B7D;
    border-radius: 25px;
    background: transparent;
    color: #272B7D;
    cursor: pointer;
`

