import './App.css';
import Generator from './components/Generator';
import {words} from './assets/words';

function App() {
  return (
    <div className="App">
      Generator
      <Generator dataset={words}/>
    </div>
  );
}

export default App;
