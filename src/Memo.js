import React from 'react'
import { useState } from 'react'
import {ProductPage} from "./ProductPage.js"

export const Memo = () => {
    const [isDark,setIsDark]=useState(false);
    console.log(isDark);
  return (
    <>
    <label>
        <input type="checkbox"  onChange={(e)=>setIsDark(e.target.checked)}></input>
        Dark Mode
    </label>
    <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  )
}
