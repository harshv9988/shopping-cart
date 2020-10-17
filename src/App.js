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
                  qty : 0,
                  img:'https://images.unsplash.com/photo-1591122947157-26bad3a117d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                  id : 1
              },
              {
                  title : 'Watch',
                  price : '999',
                  qty : 0,
                  img:'https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=638&q=80',
                  id : 2
              },
              {
                  title : 'Laptop',
                  price : '999',
                  qty : 0,
                  img:'https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
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

    getTotal = () => {
        const {products} = this.state;
        let total = 0;
        products.forEach((product)=>{
            total += product.qty*product.price;
        })

        return total;
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
            <div style={{fontSize:20,padding:10}}>Total = {this.getTotal()}</div>
        </div>
        );
    }
    }

    export default App;
