import {createStore, combineReducers,compose,applyMiddleware} from "redux";
import thunk from 'redux-thunk'; //Se usa para promesas
import pokeReducer from './pokeDucks';

const rootReducer = combineReducers({
  listaPokemones: pokeReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
  const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
  return store;
}