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
  // when a user click on update in ProductCreation, update state.
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
    console.log("added product")
  }

  // when a user clicks on the update button in ProductEdit, update state

  updateProduct = (product) => {
    for (let i = 0; i < this.state.products.length; i++) {
      if (this.state.products[i].id === product.prodId) {

        let updatedState = Object.assign({}, this.state.products)

        updatedState[i].title = product.title;
        updatedState[i].price = product.price;
        updatedState[i].image = product.image;

        this.setState( updatedState)

        console.log("found procduct and updated:", updatedState[i])
      }
    }
  }

  //Remove Prodcut recrod from the list when either the delete button is click in ProductList or ProductEdit componenets
  deleteProductRecord = (product, id) => {
    // console.log("ID passed into deleteProductRecord:", id);
    // console.log("product passed into deleteProductRecord:", product);

    let newState = Object.assign({}, this.state.products);

    for (let i = 0; i < this.state.products.length; i++) {
      if (this.state.products[i].id == id) {

        console.log("newState", newState[i].title);
        this.state.products.splice(i, 1);

        this.setState(newState)
        
        console.log("found procduct and deleted:", newState[i])
      }
    }
  }

  render() {

    console.log("current state", this.state);
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
            {/* when a user clicks on edit in the product list, route to the ProdcutEdit component*/}
            <Route path="/products/edit/:id" render={
              (props) => {
                return (<ProductEdit
                  {...props}
                  products={this.state.products}
                  updateProduct={this.updateProduct} 
                  deleteProductRecord={this.deleteProductRecord}
                  />)
              }
            } />
            {/* route /products to the ProductCreation component */}
            <Route path="/products/new" render={
              (props) => {
                return (<ProductCreation
                  {...props}
                  addNewProduct={this.addNewProduct} />)
              }
            } />
            {/* route /products to the ProductList component */}
            <Route path="/products" render={
              (props) => {
                return (<ProductList
                  {...props}
                  products={this.state.products}
                  deleteProductRecord={this.deleteProductRecord} />)
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
