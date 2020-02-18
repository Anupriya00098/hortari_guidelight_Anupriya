import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import productTile from './components/productTile';

const productArray =[
    {
        "id":1,
        "title":"oneplus7",
        "price":"Rs 30000"
    },
    {
        "id":2,
        "title":"oppo",
        "price":"Rs 12000"
    },
    {
        "id":3,
        "title":"m30s",
        "price":"Rs 16000"
    }
]
class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstState: 'hello world',
            cartCount: 0,
            products:[] 
        }
    }
        
    
    componentDidUpdate(PrevProps,preState){
        if(this.state.cartCount>=10)
        alert('cannot add more than 10 items')
    }
    componentDidMount(){
        this.loadProducts()
    }
    addCount(){
      const newCount=this.state.cartCount+1;
      this.setState({
        cartCount: newCount
        
      })
      
    }
 loadProducts(){
     this.setState({
         products:productArray
     })
 }
 render() {
     const productList=this.state.products.map((products)=>{
         return productTile(this.addCount.bind(this),products)
     })
     console.log(productList)
    return (
   
        <div className="container">
          <nav className="navbar navbar-light" style={{"backgroundColor": "lavender"}}>
          
    <img src="download.jpg." width="70" height="150" className="d-inline-block align-top" alt=""/>
    {this.state.firstState}
    
    <p align="right">
    <button type="button" className="btn btn-warning">Cart{this.state.cartCount}</button>
    </p>
    </nav>
               <div className="row">
                {productList}
                </div>
                
            <p align="right">
              <button type="button" className="btn btn-primary btn-lg" onClick={() =>{
                                      alert('ARe u sure')
                                    }

                                    }>Checkout</button></p>
    
    
    </div>
    
    
      );

}




}


export default App;


