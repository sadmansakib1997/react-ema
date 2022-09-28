import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
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
////////////////////////////////////
useEffect( () =>{
  const storecart = getStoreCart();
  const safecart = [];
  for( const id in storecart){
    const addedProduct = products.find(product => product.id === id);
    if(addedProduct){
      const quantity = storecart[id];
      addedProduct.quantity = quantity;
      safecart.push(addedProduct);
    }
  }
  setcart(safecart);
},[products])
    ///////////////////////////////////////////

    const handleToCart = (selectedproduct) =>{
      console.log(selectedproduct)
      let newcart =[];
      const exists = cart.find(product => product.id === selectedproduct.id);
      if(!exists){
        selectedproduct.quantity = 1;
        newcart = [...cart,selectedproduct];
      }
      else{
        const rest = cart.filter(product => product.id !== selectedproduct.id);
        exists.quantity = exists.quantity +1;
        newcart = [...rest,exists];
      }

      
      setcart(newcart);
      addToDb(selectedproduct.id);
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