import React from "react";
import { Link } from "react-router-dom";
import "./style_Products.css";

function ProductCard({ id, item, cant }) {
	return (
		<Link
			to={`/products/${id}`}
			className="link-card"
		>
			<div className="img">
				<img src={item.image} />
			</div>
			<div className="size">{item.category}</div>
			<div className="title">{item.title}</div>
			<div className="box">
				<div className="price">{item.price}</div>
				<button className="btn"> Comprar</button>
			</div>
		</Link>
	);
}

export default ProductCard;
