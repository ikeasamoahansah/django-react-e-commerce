import React, { Component } from 'react';

class Products extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: [],
            loading: true,
            error: null,
        }
        this.getProducts = this.getProducts.bind(this);
    }


    componentDidMount() {
        this.getProducts()
    }


    getProducts = async () => {
        const url = "http://127.0.0.1:8000/api/products/"

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.status === 200) {
            console.log(response.json())
        } else {
            alert("Bad request")
        }
    }

    render() {

        const {loading} = this.state;

        if (loading) {
            <p>Page is loading....</p>
        }

        return (
            <>
            </>
        )
    }
}

export default Products;