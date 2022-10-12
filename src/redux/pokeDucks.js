import axios from 'axios'

// constantes
const dataInicial = {
  array : []
}


//types
//String que se llama igual que la constante
const getPokemosSuccess = 'getPokemosSuccess';


//reducer --las accciones se procesan
export default function pokeReducer( state = dataInicial, action){
  switch (action.type) {
    case 'getPokemosSuccess':
      //...state es el array []
      return {
        ...state,
        array: action.payload  //Mandamos los pokemones al state
      }

      default:
        return state
      

  }
}


// acciones
export const getPokemonsAction = () => async (dispatch,getState) => {
  try{
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0?limit=20`);
    dispatch({
      type: getPokemosSuccess,
      payload: res.data.results 
    });
  }catch(err){
    console.log(err);
  }
}
