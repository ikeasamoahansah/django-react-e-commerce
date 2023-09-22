import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        const url = `http://127.0.0.1:8000/api/products/${id}/`
    
        fetch(url)
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("server error");
            }
            return response.json()
        })
        .then((response) => {
            setProduct(response);
        })
        .catch((error) => {
            console.log("Error fetching products:", error);
        })
        .finally(() => setLoading(false));
    }, [])

    if (loading) return <p>Page is loading....</p>;

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={`http://127.0.0.1:8000${product.image}`} alt=""/>
            <p>{product.price}</p>
            <h3>Posted by: {product.user}</h3>
        </div>
    )
    
}

export default ProductDetail;