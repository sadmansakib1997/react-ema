import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h4>Product summary</h4>
            <p>Items Selected:{cart.length}</p>
            
        </div>
    );
};

export default Cart;