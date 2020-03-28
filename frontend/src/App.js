import React from 'react';

import './global.css';

import Routes from './routes';
//JSX

function App() { //componente
 /*
 const [contador, setCounter] = useState(0);
  function increment(){
    setCounter(contador + 1);
  console.log(contador);
  }
  return (
  <div>
    <Header> Semana OmniStack Contador : {contador}</Header>
      <button onClick={increment}> Incrementar      </button>
    </div>*/

    return (
      <Routes/>
  );
}

export default App;
