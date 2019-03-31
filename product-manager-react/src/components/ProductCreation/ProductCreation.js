import React, { Component } from 'react';
import './ProductCreation.css';

class ProductCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            price: 0,
            image: '',
        }
    }

    // place functions here to manipulate the state
    // handle the data being input
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        console.log("input submitted");
        event.preventDefault();
        this.props.addNewProduct(this.state)
        this.props.history.push("/products")
    }



    render() {
        // console.log("current state:", this.state);
        // console.log("creation props:",this.props);

        // set variables to arrow functiont to create HTML components
        return (
            <div className="productCreation">
                <h1>Product Creation</h1>
                <form onSubmit={this.handleSubmit} className="createForm">
                    <label className="inputLabel">Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <br/>
                    <label className="inputLabel">Price</label>
                    <input type="number" name="price" value={this.state.price} onChange={this.handleChange}/>
                    <br/>
                    <label className="inputLabel">Image URL</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleChange}/>
                    <br/>
                    <input type="submit" value="CREATE" className="createButton"/>
                </form>
            </div>
        )
    }
}
export default ProductCreation