import React from 'react';
import { Link } from 'react-router-dom';

const ProductsRow = ({ product }) => {
    const { _id,img, category, name, price, ratings, seller, stock } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Category :{category}</p>
                <p>Price $: {price}</p>
                <p>Ratings:{ratings}</p>
                <p>Seller: {seller}</p>
                <p>Stock Avaiable {stock}</p>
                <div className="card-actions justify-end">
                    <Link to={`/bookings/${_id}`} className="btn btn-primary">Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsRow;