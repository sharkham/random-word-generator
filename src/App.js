import './App.css';
import Generator from './components/Generator';
import {words} from './assets/words';

function App() {
  return (
    <div className="App">
      <h1>Random Word Generator</h1>
      <Generator dataset={words}/>
    </div>
  );
}

export default App;
