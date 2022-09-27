import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
  

  const [cart,setcart] = useState([]);
  //////////////////////////////////////////
    const [products,setproduct] = useState([]);
    useEffect( () =>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setproduct(data))
    } ,[])
    ///////////////////////////////////////////

    const handleToCart = (product) =>{
      console.log(product)
      const newcart = [...cart,product]
      setcart(newcart);
    }

    return (
        <div className='shop-container'>
          <div className="product-container">
           {products.map(product => <Product 
           key={product.id}
           product = {product}
           handleToCart={handleToCart}
           ></Product>)}
          </div>
          <div className="cart-container">
           <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Shop;