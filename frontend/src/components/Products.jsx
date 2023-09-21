import { Component } from "react";

class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {product} = this.props;

        return (
            <div className="card">
                <img 
                className='w-full h-full object-cover' 
                src={`http://127.0.0.1:8000${product.image}`} 
                alt="image" />
                
                
                <div className="p-5 flex flex-col gap-3">

                    <div className="flex items-center gap-2">
                        <span className="badge">office</span>
                        <span className="badge">products</span>
                    </div>

                    <h2 className="product-title">{product.name}</h2>

                    <div>
                        <span className="text-xl font-bold">
                            ${product.price}
                        </span>
                    </div>

                    <div className="mt-5 flex gap-2">
                        <button className="button-primary">
                            Add to Cart
                        </button>
                    </div>
                    {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
                </div>
            </div>
        )
    }

}

export default Product;