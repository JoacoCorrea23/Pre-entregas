import { Button, Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import Btn_cantidad from "../item-button-component/item-button-component";
import "./singleProductComponent.css";
// import { useState, useEffect } from "react";

function ProductDetail() {
	const { id } = useParams();
	const { data, loading, error } = useFetch(
		`https://fakestoreapi.com/products/${id}`
	);

	if (loading) {
		return <div className="containerLoading"> Cargando ... </div>;
	}

	if (error) {
		return <div className="containerLoading"> Error : {error.message} </div>;
	}

	// const [quantityAdded,setQuantity]=useState(0);

	// const handleOnAdd = (quantity)=>{
	// 	setQuantity(quantity)
	// }

	return (
		<div className="product-card">
			<Row>
				<Col
					md={6}
					className="image-section"
				>
					<Image
						src={data.image}
						className="product-image_2"
					/>
				</Col>
				<Col
					md={6}
					className="details-section"
				>
					<h1>{data.title}</h1>
					<p className="stars">⭐⭐⭐⭐⭐</p>
					<Row className="normal-row">
						<Col
							lg={2}
							sm={6}
						>
							Categoria:
						</Col>
						<Col
							lg={10}
							sm={4}
						>
							{data.category}
						</Col>
					</Row>
					<Row className="normal-row">
						<Col
							lg={2}
							sm={6}
						>
							Costo :
						</Col>
						<Col
							lg={10}
							sm={4}
						>
							${data.price}
						</Col>
					</Row>
					<div className="tenure-control">
						<p>Cantidad :</p>
						<Btn_cantidad quantity={1} />
					</div>
					<p className="booking-info">{data.description}</p>
					<div className="buttons">
						<Button
							variant="outline-dark"
							className="add-to-cart-btn"
						>
							Agregar al carrito
						</Button>
						<Button className="buy-now-btn">Comprar</Button>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default ProductDetail;
