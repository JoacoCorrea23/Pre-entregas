import { useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import Btn_cantidad from "../../components/item-button-component/item-button-component";
import { addProductToCart, useCart } from "../../context/CartContext";
import "./singleProductComponent.css";

function ProductDetail({ item }) {
	const [quantity, setQuantity] = useState(1); // Estado para la cantidad
	const { cart, setCart } = useCart();
	// const { addiItemToCart } = useCart();

	const increaseTenure = () => {
		// Suponiendo que 'item' es el objeto que contiene la propiedad 'stock'
		const itemStockValue = item.stock ? item.stock : 5;
		if (quantity < itemStockValue) {
			// Asegurarse de no exceder el stock

			setQuantity(quantity + 1);
		}
	};

	const decreaseTenure = () => {
		if (quantity > 1) {
			// No permite que la cantidad sea menor a 1
			setQuantity(quantity - 1);
		}
	};

	const handleAddToCart = () => {
		addProductToCart(item, quantity, cart, setCart); // Llama a la función para agregar al carrito
	};

	return (
		<div className="product-card">
			<Row>
				<Col
					md={6}
					className="image-section"
				>
					<Image
						src={item.image}
						className="product-image_2"
					/>
				</Col>
				<Col
					md={6}
					className="details-section"
				>
					<h1>{item.title}</h1>
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
							{item.categoryName}
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
							${item.price}
						</Col>
					</Row>
					<div className="tenure-control">
						<p>Cantidad :</p>
						<Btn_cantidad
							quantity={quantity}
							stock={item.stock}
							increaseTenure={increaseTenure}
							decreaseTenure={decreaseTenure}
						/>
					</div>
					<p className="booking-info">{item.description}</p>
					<div className="buttons">
						<Button
							variant="outline-dark"
							className="add-to-cart-btn"
							onClick={handleAddToCart}
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

// const handleAddToCart = () => {
// 	addItemToCart(item, quantity); // Agregar producto y cantidad al carrito
// };
