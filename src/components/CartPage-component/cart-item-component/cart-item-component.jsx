// CartItemComponent.jsx
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import {
	modifyProductFromCart,
	removeProductFromCart,
	useCart,
} from "../../../context/CartContext";
import Btn_cantidad from "../../item-button-component/item-button-component";
import "./style-cart-item-component.css";

const CartItemComponent = ({ id, item }) => {
	const { cart, setCart } = useCart();
	const [realquantity, setQuantity] = useState(
		item.quantity ? item.quantity : 1
	); // Estado para la cantidad

	const increaseTenure = () => {
		// Suponiendo que 'item' es el objeto que contiene la propiedad 'stock'
		const itemStockValue = item.stock ? item.stock : 5;
		if (realquantity < itemStockValue) {
			// Asegurarse de no exceder el stock
			setQuantity(realquantity + 1);
			modifyProductFromCart(item, realquantity + 1, cart, setCart); // Llama a la función para modificar un producto del carrito
		}
	};

	const decreaseTenure = () => {
		if (realquantity > 1) {
			// No permite que la cantidad sea menor a 1
			setQuantity(realquantity - 1);
			modifyProductFromCart(item, realquantity - 1, cart, setCart); // Llama a la función para modificar un producto del carrito
		}
	};

	const handleRemoveToCart = () => {
		removeProductFromCart(item.cartItemId, cart, setCart); // Llama a la función para remover un producto del carrito
	};

	return (
		<ListGroup.Item>
			<Row>
				<Col md={3}>
					<Image
						src={item.image}
						thumbnail
					/>
					<Button
						variant="danger"
						className="mt-2" // Agrega un poco de margen superior
						onClick={handleRemoveToCart}
					>
						Eliminar
					</Button>
				</Col>

				<Col md={2}>{item.title}</Col>
				<Col md={3}>
					<Btn_cantidad
						quantity={realquantity}
						stock={item.stock || 5}
						increaseTenure={increaseTenure}
						decreaseTenure={decreaseTenure}
					/>
				</Col>
				<Col md={2}>{item.price}</Col>
				<Col md={2}>{(item.price * realquantity).toFixed(2)}</Col>
			</Row>
		</ListGroup.Item>
	);
};

export default CartItemComponent;
