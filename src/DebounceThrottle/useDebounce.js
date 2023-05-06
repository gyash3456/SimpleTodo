import React from 'react'
import {useState, useEffect } from 'react'

export const useDebounce = (text,delay=1000) => {
 const [value,setValue]= useState(text);
useEffect(()=>{
    const timeout=setTimeout(()=>{
        setValue(text);
     },delay);
     return ()=>{clearTimeout(timeout)}
},[text])
 
 return value;
}
