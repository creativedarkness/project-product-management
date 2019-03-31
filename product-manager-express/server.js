const express = require("express");
const app = express();

// Body Parser Library for Post Data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// Static Route to Serve the React App
const path = require("path");
app.use(express.static(path.resolve(__dirname, "./../product-manager-react/build")))

app.get("/api/v1/products", (request, response) => {
    axios.get(`http://5c9e6cc5595c55001487bf45.mockapi.io/products`)
        .then((axiosResposne) => {
            console.log("axiosResposne", axiosResposne);
            // return (
            //     response.json({
            //         products: axiosResposne.data
            //     })
            // )
        })
})


