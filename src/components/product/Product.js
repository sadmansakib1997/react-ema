import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({product,handleToCart}) => {
  // const {product,handleToCart} =props
   
  const {img,name,price,seller,ratings} = product;
  // console.log(props)
 
    return (
        <div className='product'>
           <div className='pproduct'>
           <img src={img} alt="" />
            <p className='name'>{name}</p>
            <h4 className='price'>Price:{price}</h4>
            <p><small>Seller:{seller}</small></p>
            <p>Ratting:{ratings}</p>
           </div>
            <button onClick={()=> handleToCart(product)} className='btn'>
              <p className='btn-text'>Add cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
              </button>
        </div>
    );
};

export default Product;