import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import StartPage from './pages/desktop/StartPage'
// import StudentsList from './pages/desktop/StudentsList'
// import StudentsListMobile from './pages/mobile/StudentsListMobile'
// import StartPageMobile from './pages/mobile/StartPageMobile'
// import MenuPage from './pages/desktop/MenuPage'
// import MenuPageMobile from './pages/mobile/MenuPageMobile'

import Title from './Title';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import Result from './Result';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/first' element={ <FirstPage/>} />
        <Route path='/second' element={ <SecondPage/>} />
        <Route path='/third' element={ <ThirdPage/>} />
        <Route path='/fourth' element={ <FourthPage/>} />
        <Route path='/fifth' element={ <FifthPage/>} />
        <Route path='/result' element={ <Result/>} />
        <Route path='/' element={ <Title/>} />
      </Routes>   
    </Router>
    );
}

export default App;

