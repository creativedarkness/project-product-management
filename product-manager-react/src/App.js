import React, { Component } from 'react';
import "react-router";
import {
  Route,
  Link,
  Redirect,
  Switch,

} from "react-router-dom";
import ProductHome from "./components/ProductHome/ProductHome";
import ProductList from "./components/ProductList/ProductList";
import ProductCreation from "./components/ProductCreation/ProductCreation";
import ProductEdit from "./components/ProductEdit/ProductEdit";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextid: 4,
      products: [
        { id: 1, title: "thing1", price: 199.99, image: "pretty picture" },
        { id: 2, title: "thing2", price: 199.99, image: "pretty picture" },
        { id: 3, title: "thing3", price: 199.99, image: "pretty picture" },
        { id: 4, title: "thing4", price: 199.99, image: "pretty picture" },
      ],
    }
  }

  addNewProduct = (product) => {
    // console.log("addNewProduct passing:",product);
    this.setState({
      products: [
        ...this.state.products,
        {
          id: this.state.nextid + 1,
          title: product.title,
          price: product.price,
          image: product.image
        }
      ]
    })
  }

  editProduct = (product, id) => {
    this.setState({
      products: [
        ...this.state.products,
        {
          id: { id },
          title: product.title,
          price: product.price,
          image: product.image
        }
      ]
    })
  }

  // deleteProductRecord = (id) => {
  //   console.log("id passed in:", id)
  //   for(let i=0; i<this.state.products.length; i++){
  //     if(this.state.products[i].id === id){
  //       console.log("this.state.products[i].id is:",this.state.products[i].id)
  //       // this.state.products.splice(i, 1);
  //       break;
  //     }
  //   }
  // }

  render() {

    // console.log("current state", this.state);
    return (
      <div className="App">
        <h1>PPM - Project Product Mangement</h1>

        <div className="navbar">
          <ul className="navlist">
            <li className="navItem"><Link to="/home">Home</Link></li>
            <li className="navItem"><Link to="/products">Product List</Link></li>
            <li className="navItem"><Link to="/products/new">Product Creation</Link></li>
          </ul>

          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={ProductHome} />
            <Route path="/products/edit/:id" render={
              (props) => {
                return (<ProductEdit
                  {...props}
                  products={this.state.products}
                  editProduct={this.state.editProduct} />)
              }
            } />
            <Route path="/products/new" render={
              (props) => {
                return (<ProductCreation
                  {...props}
                  addNewProduct={this.addNewProduct} />)
              }
            } />
            <Route path="/products" render={
              (props) => {
                return (<ProductList
                  {...props}
                  products={this.state.products}
                  deleteProductRecord={this.state.deleteProductRecord} />)
              }
            }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

// export default withRouter(App);
export default App;
