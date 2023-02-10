import logo from './logo.svg';
import './App.css';
import {useReducer} from 'react';
const ACTIONS={
  INCREMENT:"increment",
  DECREMENT:"decrement"
}
function reducer(state,action){
  switch(action.type){
    case ACTIONS.INCREMENT:
      return {count:state.count+1};
    case ACTIONS.DECREMENT:
      return {count:state.count-1};
      default:
        return state;
  }
}

function BasicCounter() {
const [state,dispatch]=useReducer(reducer,{count:0})
  
  const increment=()=>{
    dispatch({type:ACTIONS.INCREMENT})
  }
  const decrement=()=>{
    dispatch({type:ACTIONS.DECREMENT})
  }
  return (
    <div className="App">
        
        <button onClick={decrement}>-</button>{state.count}
        <button onClick={increment}>+</button>
      
    </div>
  );
}

export default BasicCounter;
