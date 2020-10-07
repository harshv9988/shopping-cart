import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import CartItem from './CartItem';

class App extends React.Component {

  constructor(){
      super();
      this.state = {
          products : [
              {
                  title : 'Phone',
                  price : '999',
                  qty : 1,
                  img:'',
                  id : 1
              },
              {
                  title : 'Watch',
                  price : '999',
                  qty : 1,
                  img:'',
                  id : 2
              },
              {
                  title : 'Laptop',
                  price : '999',
                  qty : 1,
                  img:'',
                  id : 3
              }
          ]
      }
 }

 handleIncreaseQty = (product) => {
     // console.log('increase qty of ',product);
     // console.log(this.state);
     const {products} = this.state;
     const index = products.indexOf(product);
     products[index].qty += 1;

     this.setState({
         products:products
     })
 }

 handleDecreaseQty = (product) => {
     
     const {products} = this.state;
     const index = products.indexOf(product);

     if(products[index].qty===0){
         return;
     }

     products[index].qty -= 1;

     this.setState({
         products:products
     })
 }

 handleDeleteProuct = (id) =>{
     const {products} = this.state;

     const items = products.filter((item) => item.id !== id);

     this.setState({
         products : items
     })
 }

 getCartCount = () => { 
   const {products} = this.state;
   let count = 0;

   products.forEach((product) => {
      count += product.qty;
   })

   return count;
 }

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar 
          count = {this.getCartCount()}
        />
        <Cart
            products={products}
            onClickIncreaseQty={this.handleIncreaseQty}
            onClickDecreaseQty={this.handleDecreaseQty}
            onClickDelete={this.handleDeleteProuct}
        />
      </div>
    );
  }
}

export default App;
