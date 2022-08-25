import {useContext, useEffect, useState} from "react";
import {AppContext} from "../App";
import {useParams, useNavigate, Link} from 'react-router-dom';

export default function Product() {
	const state = useContext(AppContext)
    const {products, cart, setCart} = state;
    let { id } = useParams();
    const navigate = useNavigate();

    const product = products.find((item)=>{
    	return item.id === id
    })

    return (
    	<div className="product">
	    	<div className="container">
	    		<div className="product-inner">
		    		<div className="product-image">
		    			<img src={product.image} alt="Product" />
		    		</div>
		    		<div className="product-info">
		    			<h2 className="product-name">{ product.name }</h2>
		    			<span className="product-price">{ product.price } coins</span>
			    		<div className="product-actions">
				    		<div className="product-cart-btns">
					    		<button
	                                className="product-btn"
	                                onClick={() => {setCart([...cart, product.id]); navigate('/cart')}}
	                            >
	                                Add to cart
	                            </button>
				    			<a href="#" className="product-btn product-btn-active">
				    				Buy now
				    				<i className="icon-long-arrow-right"></i>
				    			</a>	
				    		</div>
							<Link className="product-back" to={'/'}>
								<i className="icon-long-arrow-left"></i>
								Continue Shopping
							</Link>
			    		</div>
		    		</div>
	    		</div>
	    	</div>
    	</div>
    );
}