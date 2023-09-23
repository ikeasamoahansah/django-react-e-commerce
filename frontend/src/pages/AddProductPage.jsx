import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

export default class AddProductPage extends Component {

    static contextType = AuthContext;

    constructor(props){
        super(props)
        this.state = {
            name: null,
            image: null,
            description: null,
            price: 10,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const {authTokens} = this.context;

        // const postData = {
        //     user: authTokens.access,
        //     name: this.state.name,
        //     image: this.state.image,
        //     description: this.state.description,
        //     price: this.state.price,
        // };

        let formData = new FormData()
        formData.append("user", authTokens.access);
        formData.append("name", this.state.name);
        formData.append("image", this.state.image);
        formData.append("description", this.state.description);
        formData.append("price", this.state.price);
        
        const url = "http://127.0.0.1:8000/api/products/";
        const csrfToken = Cookies.get('csrftoken');
    
        const response = await fetch(url, {
            method: "POST",
            headers:{
                'X-CSRFToken': csrfToken,
                'Authorization': `Bearer ${authTokens.access}`,
            },
            body: formData
        })

        if (response.status === 201) {
            <Navigate to="/products" />
        } else {
            console.log(response.json())
        }
        
    };


    render() {
        return (
            <main className="min-h-screen flex flex-col items-center justify-center">
                <div className="space-y-3 my-5">
                    <h1 className="text-3xl font-extrabold">Post a new Product</h1>
                </div>
                <div className="max-w-md w-full mx-auto bg-gray-200 rounded-lg p-7 space-y-3">
                    <form onSubmit={this.handleSubmit}>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm" htmlFor="name">Title</label>
                            <input className="border rounded-md px-3 py-2" type="text" name="name" placeholder="A catchy title" value={this.state.name} onChange={this.handleChange} required/>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm" htmlFor="image">Image</label>
                            <input className="border rounded-md px-3 py-2" type="file" accept="image/jpeg,image/png,image/gif"  name="image" value={this.state.image} onChange={this.handleChange} required/>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm" htmlFor="description">Description</label>
                            <input className="border rounded-md px-3 py-2 mb-1" type="text" name="description" value={this.state.description} onChange={this.handleChange} required/>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm" htmlFor="price">price</label>
                            <input className="border rounded-md px-3 py-2 mb-3" type="number" min="1" step=".1" name="price" value={this.state.price} onChange={this.handleChange} required/>
                        </div>
                        <div>
                            <button className="w-full rounded-md bg-blue-400 text-white py-2">Post</button>
                        </div>
                    </form>
                </div>
            </main>
        )
    }
}
