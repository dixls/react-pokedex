import './App.css';
import {Pokedex, pokeList} from './Pokedex';

function App() {
  return (
    <div className="App">
      <Pokedex pokelist={pokeList} />
    </div>
  );
}

export default App;
