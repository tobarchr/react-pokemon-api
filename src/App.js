import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemon,setPokemon] = useState([]);
  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon')
  //     .then(response => response.json())
  //     .then(response => setPokemon(response.results))
  // }, []);

    const onClick = () =>{
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=808')
        .then(response => setPokemon(response.data.results))
    }
  return (
    <div className="container">
        <div className="row justify-content-md-center">
          <div class="col-md-auto">
            <button className="btn btn-primary mt-2" onClick={onClick}>Fetch Pokemon</button>
          </div>
        </div>
        <div className="row justify-content-md-center mt-2">
          <div class="col-md-auto">
            {pokemon.length>0 && pokemon.map((pokemon,index)=> {
              return (
                <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>{pokemon.name}
                <span className="badge badge-primary badge-pill">{index}</span>
                </li>
              </ul>
              )
            })}
          </div>
        </div>
    </div>
  );
}

export default App;
