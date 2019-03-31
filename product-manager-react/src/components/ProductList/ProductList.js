import React, { Component } from 'react';
// import axios from "axios";
// import { Link,} from "react-router-dom";
import './ProductList.css';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: null,
        }
    }
    // place functions here to manipulate the state
    ///when Edit button click, redirect ProductEdit page for product that was click
    handleEditClick = (event) => {
        // console.log("name",event.target.name)
        this.props.history.push(`/products/edit/${event.target.name}`)
    }

    handleDelete = (event) => {
        console.log("name:",event.target.name)
        console.log("props", this.props);
        // this.props.deleteProductRecord(event.target.name)
        // this.props.history.push(`/products`)
    }


    render() {
        // console.log(this.props);
        const showProducts = this.props.products.map((product, idx) => {
            return (
                <div className="productListing" key={idx}>
                    <h2>{product.image}</h2>
                    <h3>{product.title}</h3>
                    <h3>${product.price}</h3>
                    <div className="listbuttons">
                        <button className="editButton" name={product.id} onClick={this.handleEditClick}>EDIT</button>
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