import React from 'react'
//useSelector lee el array
import { useDispatch, useSelector } from 'react-redux';
import {getPokemonsAction} from '../redux/pokeDucks';

const Pokemones = () => {
  //dispatch llama a la acción
  const dispatch = useDispatch();

  const pokemones = useSelector((store)=>store.listaPokemones.array)
  console.log(pokemones)

  return (
    <>

      <button onClick={()=> dispatch(getPokemonsAction())}>Get Pokemon</button>
      
      <ul>
        {
          pokemones.map(pokemon =>(
            <li key={pokemon.name}>{pokemon.name}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Pokemones