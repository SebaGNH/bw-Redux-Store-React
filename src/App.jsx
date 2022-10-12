import React from 'react';
import {Provider} from 'react-redux';
import generateStore from './redux/store';
import Pokemones from './components/Pokemones';



const App = () => {
  return (
  <Provider store={generateStore()}>
    <div className='container px-5 mt-5'>
      <div className="row bg-secondary px-3">
        <Pokemones />
      </div>
    </div>
  </Provider>
  )
}

export default App