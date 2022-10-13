import axios from 'axios'

// constantes
const dataInicial = {
  array : [],
  offset: 0
}


//types
//String que se llama igual que la constante
const getPokemosSuccess = 'getPokemosSuccess';
const nextPokemosSuccess = 'nextPokemosSuccess';


//reducer --las accciones se procesan
export default function pokeReducer( state = dataInicial, action){
  switch (action.type) {
    case 'getPokemosSuccess':
      //...state es el array []
      return {
        ...state,
        array: action.payload  //Mandamos los pokemones al state
      }
    case 'nextPokemosSuccess':
      return {
        ...state,
        array: action.payload.array,
        offset: action.payload.offset
      }

      default:
        return state
      

  }
}


// acciones
export const getPokemonsAction = () => async (dispatch,getState) => {
  const pagina = getState().listaPokemones.offset
  try{
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${pagina}?limit=20`);
    dispatch({
      type: getPokemosSuccess,
      payload: res.data.results 
    });
  }catch(err){
    console.log(err);
  }
}

// paginador
export const nextPokemon = (numero) => async (dispatch,getState) =>{

  const pagina = getState().listaPokemones.offset;
  if (pagina === 0 && numero === -20) return;
  const siguiente = pagina + numero;


  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}?limit=20`);
    dispatch({
      type: "nextPokemosSuccess",
      payload: {
        array: res.data.results,
        offset: siguiente
      }
    })
  } catch (error) {
    console.log(error)
  }
}