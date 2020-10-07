import React from 'react';
import './CartItem.css'

const CartItem = (props) => {

        const {title,price,qty} = props.product;
        const {product, onClickIncreaseQty, onClickDecreaseQty, onClickDelete} = props;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img  />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>qty {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img alt="increase" 
                        onClick = {() => onClickIncreaseQty(product)}
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/static/icons/svg/709/709484.svg"/>

                        <img alt="decrease" 
                        onClick = {() => onClickDecreaseQty(product)}
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg"/>

                        <img alt="delete" 
                         onClick = {() => onClickDelete(product.id)}
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/static/icons/svg/1345/1345874.svg"/>
                    </div>
                </div>
            </div>
        );
}

// const styles = {
//     image : {
//         height:'100%',
//         width:110,
//         borderRadius:4,
//         backgroundColor:'#777'
//     }
// }

export default CartItem;