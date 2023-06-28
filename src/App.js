import './App.css';
import Fixturehome from './Components/Fixtures/Fixturehome';
import Newshome from './Components/News/Newshome';
import Transfarshome from './Components/Transfars/Transfarshome';
import Tablehome from './Components/Table/Tablehome';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Fragment } from 'react';
import Nav from './Components/Navigation/Nav';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router className="App">
      <Fragment>
        <Nav/>
        <Routes>
          <Route path='/' element={<Fixturehome/>}/>
          <Route path='/news' element={<Newshome/>}/>
          <Route path='/transfers' element={<Transfarshome/>}/>
          <Route path='/table'  element={<Tablehome/>}/>   
        </Routes>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
