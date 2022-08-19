import './App.css';
import {Pokedex, pokeList} from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex pokelist={pokeList} />
    </div>
  );
}

export default App;
