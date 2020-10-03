import React from 'react';
import './CartItem.css'

class CartItem extends React.Component{
    constructor(){
        super();
       this.state = {
        title : 'Phone',
        price : '999',
        qty:1,
        img:''
       }
    }
    render(){
        const {title,price,qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img  />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>qty-{qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img alt="increase" className="action-icons" src="https://www.flaticon.com/svg/static/icons/svg/709/709484.svg"/>
                        <img alt="decrease" className="action-icons" src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg"/>
                        <img alt="delete" className="action-icons" src="https://www.flaticon.com/svg/static/icons/svg/1345/1345874.svg"/>
                    </div>
                </div>
            </div>
        );
    }
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