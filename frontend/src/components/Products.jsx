import { Component } from "react";

class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {product} = this.props;

        return (
            <div className="product">
            <h3>{product.name}</h3>
            <img className='max-w-xs' src={`http://127.0.0.1:8000${product.image}`} alt="image" />
            <p>${product.price}</p>
            {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
            </div>
        )
    }

}

export default Product;