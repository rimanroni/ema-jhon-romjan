import React  from 'react';
 
import { HiShoppingCart } from "react-icons/hi";
const Product = (props) => {
    const {name, img, price , seller , stock} = props.product;
    const product = props.product
    const fixPrice = Math.round(price)
    
    const addProduct  = props.addProduct;
    return (
        <div className='allProduct'>
            <div className="imgPart">
                 <img src={img} alt="" />
            </div>
            <div className="productPart">
                <h4>{name}</h4> <br />
                <h5>by : {seller}</h5>
                <h5>{stock} items left in stock </h5>
                <h4>Price : {fixPrice}</h4>
                <button  onClick={()=>addProduct(product)}> <HiShoppingCart/> Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;