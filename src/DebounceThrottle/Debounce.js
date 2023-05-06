import React, { useCallback, useEffect } from 'react'
import { useState,useRef,useMemo } from 'react'
import { useDebounce } from './useDebounce';



export const Debounce = () => {
    const [text,setText]= useState("");
    const [debtext,setDebText]= useState("");
    const reference= useRef(null);

    // const a=useDebounce(text)
    const handleChange =((text)=>{
        setDebText(text);
        console.log("you have executed")
    })
    const updateDebouncedText= useMemo(()=>{return debounce(handleChange)},[]);

    const handleChangeInput = (e)=>{
        setText(e.target.value)
     updateDebouncedText(e.target.value)

    }
    
// console.log(a)

  return (
    <>
        <input type='text' ref={reference}onChange={
            handleChangeInput
        }
            ></input><br></br>
        <span>Normal text</span>  <span>{text}</span><br/>
        <span>Debounced text</span><span>{debtext}</span>
    </>
  )
}
function debounce(cb,delay=1000){
    let timeout;

    return (...args)=>{
        clearTimeout(timeout)
      timeout=  setTimeout(()=>{cb(...args)},delay);
    }
}