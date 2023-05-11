import React from 'react'
import { useState, useEffect } from 'react'
import {createBrowserHistory} from 'history'

export const Back=()=> {
  let history = createBrowserHistory();
    const [buttonState,setButtonState]= useState("");
    
    const handleButton=(value)=>{
        setButtonState(value);
    }
    useEffect(()=>{
    console.log(history.action,window.location.href)
    if(history.action=="POP"){
      history.push("http://localhost:3000/abc")
    }
    },[history.action])


  return (
    <>
    <div>Back</div> 
    <button onClick={()=>{handleButton(1)}}>1</button>
    <button onClick={()=>{handleButton(2)}}>2</button>
    <h1>{buttonState}</h1>
    
    </>
  )
}

export default Back