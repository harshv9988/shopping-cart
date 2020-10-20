import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component {

  constructor(){
      super();
      this.state = {
          products : [],
          loading : true
      }
      this.db = firebase.firestore();
    }

      componentDidMount(){
        //    firebase
        //   .firestore()
        //   .collection('products')
        //   .get()
        //   .then((snapshot) => {
        //       console.log(snapshot);

        //       snapshot.docs.map((doc)=>{
        //           console.log(doc.data());
        //       })

        //       const products = snapshot.docs.map((doc)=>{
        
        //         const data = doc.data();
        //         data['id'] = doc.id;
        //         return data;
        //       })

        //       this.setState({
        //           products : products,
        //           loading : false
        //       })
        //   })

        this.db
          .collection('products')
          .onSnapshot((snapshot) => {
            console.log(snapshot);

            snapshot.docs.map((doc)=>{
                console.log(doc.data());
            })

            const products = snapshot.docs.map((doc)=>{
              //   return doc.data();
              const data = doc.data();
              data['id'] = doc.id;
              return data;
            })

            this.setState({
                products : products,
                loading : false
            })
        })

    }
 

    handleIncreaseQty = (product) => {
       
        const {products} = this.state;
        const index = products.indexOf(product);
        // products[index].qty += 1;

        // this.setState({
        //     products:products
        // })

        const docRef = this.db.collection('products').doc(products[index].id);

        docRef.update({
            qty : products[index].qty += 1
        })
        .then(() => {
            console.log('Product qty has been updated');
        })
        .catch((error)=> {
            console.log('error occured in updating',error);
        })
    }

    handleDecreaseQty = (product) => {
        
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty===0){
            return;
        }

        // products[index].qty -= 1;

        // this.setState({
        //     products:products
        // })

        const docRef = this.db.collection('products').doc(products[index].id);

        docRef.update({
            qty : products[index].qty -= 1
        })
        .then(() => {
            console.log('Product qty has been updated');
        })
        .catch((error)=> {
            console.log('error occured in updating',error);
        })
    }

    handleDeleteProuct = (id) =>{
        const {products} = this.state;

        // const items = products.filter((item) => item.id !== id);

        // this.setState({
        //     products : items,
        // })

        const docRef = this.db.collection('products').doc(id);

        docRef
        .delete()
        .then(()=>{
            console.log('Product has been deleted');
        })
        .catch((error)=> {
            console.log('error occured in updating',error);
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

    addProduct = () =>{

        this.db
        .collection('products')
        .add({
            img : 'https://images.unsplash.com/photo-1581788487364-db375f9ac4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
            price : 19999,
            qty : 0,
            title : 'Washing Machine'
        })
        .then((docref) => {
            console.log('Product has been added',docref);
        })
        .catch((error)=> {
            console.log('error occured in adding',error);
        })
    }

    render(){
        const {products, loading} = this.state;
        return (
        <div className="App">
            <Navbar 
            count = {this.getCartCount()}
            />

            {/* <button onClick={this.addProduct}>Add a product</button> */}
            <Cart
                products={products}
                onClickIncreaseQty={this.handleIncreaseQty}
                onClickDecreaseQty={this.handleDecreaseQty}
                onClickDelete={this.handleDeleteProuct}
            />
            {loading && <h1>Loading Products....</h1>}
            <div style={{fontSize:20,padding:10}}>Total = {this.getTotal()}</div>
        </div>
        );
    }
    }

    export default App;
