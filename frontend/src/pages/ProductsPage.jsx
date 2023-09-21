import React, { Component } from 'react';
import Product from '../components/Products';

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


    getProducts = () => {
        const url = "http://127.0.0.1:8000/api/products/"

        fetch(url)
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("server error");
            }
            return response.json()
        })
        .then((response) => {
            this.setState({products: response})
        })
        .catch((error) => {
            console.log("Error fetching products:", error);
        })
        .finally(() => this.setState({loading: false}));
    }

    render() {

        const {loading, products} = this.state;

        if (loading) {
            return <p>Page is loading....</p>
        }

        return (
            <div className="h-screen bg-gray-100 flex items-center justify-center">
                {products.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
            </div>
        )
    }
}

export default Products;