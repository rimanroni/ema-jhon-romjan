import React, { useState } from 'react';
import FakeData from  '../fakeData'
import Count from './Count';
import Product from './Product';
import { v4 as uuidv4 } from 'uuid';
const Shop = () => {
    const [product, setproduct] = useState([])


    const addProduct = (products) =>{
        const NewProduct =   [...product,  products]
        setproduct(NewProduct)
        console.log("Product added ", products)
     }

    return (
        <div className='shopContainer'>
            <div className="contentPart">
                { FakeData.map(products=><Product
                 addProduct={addProduct} 
                 key={uuidv4()}
                  product={products}/>)
                  }
            </div>
            <div className="countPart">
                 <Count product={product} />
            </div>
        </div>
    );
};

export default Shop;