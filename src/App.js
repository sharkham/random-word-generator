import './App.css';
import Generator from './components/Generator';
import {words} from './assets/words';

function App() {
  return (
    <div className="App">
      Generate:
      <Generator dataset={words}/>
    </div>
  );
}

export default App;
