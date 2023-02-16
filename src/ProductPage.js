import React, { useCallback } from 'react'
import ShippingForm from './ShippingForm'

export const ProductPage = ({productId,referrer,theme}) => {
    const handleSubmit=useCallback((orderDetails)=>{
        post('/product/'+productId+'/buy',{
            referrer,orderDetails
        });
    },[productId,referrer])
    // const handleSubmit=((orderDetails)=>{
    //     post('/product/'+productId+'/buy',{
    //         referrer,orderDetails
    //     });
    // })
  return (
    <div className={theme}><ShippingForm onSubmit={handleSubmit}></ShippingForm></div>
  )
}
function post(url,data){
    console.log("Post/"+url);
    console.log(data);
}