import React from 'react'
//useSelector lee el array
import { useDispatch, useSelector } from 'react-redux';
import {getPokemonsAction,nextPokemon} from '../redux/pokeDucks';

const Pokemones = () => {
  //dispatch llama a la acción
  const dispatch = useDispatch();

  const pokemones = useSelector((store)=>store.listaPokemones.array)
  //console.log(pokemones)

  return (
    <div className='mt-2'>

      <div className="d-flex justify-content-between">
        <button 
          className='btn btn-primary'
          onClick={()=> dispatch(getPokemonsAction())}
          >Get Pokemon
        </button> 

        <button 
          className='btn btn-primary'
          onClick={()=> dispatch(nextPokemon(20))}
          >Next Pokemon
        </button> 
        <button 
          className='btn btn-primary'
          onClick={()=> dispatch(nextPokemon(-20))}
          >Next Pokemon
        </button> 
      </div>


      <ul>
        {
          pokemones.map(pokemon =>(
            <li key={pokemon.name}>{pokemon.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pokemones