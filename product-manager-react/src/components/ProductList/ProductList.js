import React, { Component } from 'react';
// import axios from "axios";
// import { Link,} from "react-router-dom";
import './ProductList.css';

class ProductList extends Component {

    // place functions here to manipulate the state
    ///when Edit button click, redirect ProductEdit page for product that was click
    handleEditClicked = (event) => {
        // console.log("name",event.target.name)
        this.props.history.push(`/products/edit/${event.target.name}`)
    }

    handleDelete = (event) => {
        this.props.deleteProductRecord(this.props, event.target.name)
        // this.props.history.push(`/products`)
    }


    render() {
        // console.log("list props", this.props);
        const showProducts = this.props.products.map((product, idx) => {
            return (
                <div className="productListing" key={idx}>
                    <h2>{product.image}</h2>
                    <h3>{product.title}</h3>
                    <h3>${product.price}</h3>
                    <div className="listbuttons">
                        <button className="editButton" name={product.id} onClick={this.handleEditClicked}>EDIT</button>
                        <br />
                        <button className="listDeleteButton" name={product.id} onClick={this.handleDelete}>DELETE</button>
                    </div>
                </div>
            )
        })
        // set variables to arrow functiont to create HTML components
        return (
            <div className="productList">
                <h1>Product List</h1>
                {showProducts}
            </div>
        )
    }
}
export default ProductList