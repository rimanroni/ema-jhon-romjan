 import React from 'react';
 
 const Count = (props) => {
    const product = props.product
   
    let tax = 0;
    const total = product.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
      
      if(total>=100){
        tax = 5;
      }
       if(total>=200){
        tax = 10;
      }
        if(total>=300){
        tax = 15;
      }
      
     
      const mamu = Math.round(total)
    return (
        <div className='Maincount'>
            <h2>Order Summery </h2>
             <h3>Running Order : {product.length}</h3>
             <h4>Price : {mamu}</h4>
             <h4>Tax : {tax}</h4>
             <h4>Total Price : { mamu + tax}</h4>
             <button onClick={()=>alert("Devlopment Comming Soon")}>Review order</button>
        </div>
    );
 };
 
 export default Count;