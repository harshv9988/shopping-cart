import React from 'react';
import CartItem from './CartItem'


const Cart = (props) => {
    
    
        const {products} = props;
        return (
            <div className="cart">
                {
                    products.map((product) => {
                        return <CartItem 
                        product = {product} 
                        key={product.id}
                        onClickIncreaseQty={props.onClickIncreaseQty}
                        onClickDecreaseQty = {props.onClickDecreaseQty}
                        onClickDelete = {props.onClickDelete}
                        />
                    })
                }
            </div>
        );
}

   



export default Cart;