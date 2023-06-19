import './App.css';
import Fixturehome from './Components/Fixtures/Fixturehome';
import Newshome from './Components/News/Newshome';
import Squadhome from './Components/Squad/Squadhome';
import Transfarshome from './Components/Transfars/Transfarshome';
import Tablehome from './Components/Table/Tablehome';

function App() {
  return (
    <div className="App">
      <div>
        <Fixturehome/>
        <Newshome/>
        <Squadhome/>
        <Transfarshome/>
        <Tablehome/>
      </div>
    </div>
  );
}

export default App;
