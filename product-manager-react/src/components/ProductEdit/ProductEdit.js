import React, { Component } from 'react';
// import axios from 'axios';
import './ProductEdit.css';

class ProductCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prodId: null,
            title: null,
            price: null,
            image: null,
        }
    }
    componentDidMount = () => {
        // console.log("params",this.props.match.params);
        // console.log("title",this.props.products[this.props.match.params.id-1].title);

        this.setState({
            prodId: this.props.products[this.props.match.params.id-1].id,
            title: this.props.products[this.props.match.params.id-1].title,
            price: this.props.products[this.props.match.params.id-1].price,
            image: this.props.products[this.props.match.params.id-1].image,
        })
    }

    // place functions here to manipulate the state
    // handle the data being input
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    //send the updated input to the updatedProduct function
    handleUpdate = (event) => {
        console.log("input submitted");
        event.preventDefault();
        this.props.updateProduct(this.state)
        this.props.history.push("/products")
    }

    handleDelete = (event) => {
        console.log("Product deleted");
        event.preventDefault();
        this.props.deleteProductRecord(this.state, this.state.prodId)
        this.props.history.push("/products")

    }


    render() {
        // console.log("edit current state:", this.state);
        // console.log("eidt props", this.props);


        // set variables to arrow functiont to create HTML components
        return (
            <div className="productEdit">
                <h1>Edit Product</h1>
                {/* autofill the form with the iformation matching the ID from the edit button that was clicked  
                or leave blank */}
                {this.state.title ?
                <form className="editForm">
                    <label className="inputLabel">Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <br/>
                    <label className="inputLabel">Price</label>
                    <input type="number" name="price" value={this.state.price} onChange={this.handleChange}/>
                    <br/>
                    <label className="inputLabel">Image URL</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleChange}/>
                    <br/>
                    <input type="button" value="Delete" className="deleteButton" onClick={this.handleDelete}></input>
                    <input type="button" value="UPDATE" className="updateButton" onClick={this.handleUpdate}></input>
                </form>
                    : null}
            </div>
        )
    }
}
export default ProductCreation