import PageRender from './components/PageRender'
import PokemonStats from './components/PokemonStats'
import Header from './components/Header';
import { PokemonProvider } from './providers/pokemoncontext';

import { useEffect } from 'react'


function App() {

  useEffect(()=>{
    localStorage.clear()
  }, [])

  return (
    <div>
      <PokemonProvider>
        <Header/>
        <PokemonStats/>
        <PageRender/>
      </PokemonProvider>
    </div>
  );
}

export default App;
