import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import { clearCart, useCart } from "../../context/CartContext";
import Cart_item_component from "./cart-item-component/cart-item-component";
import "./style-cartPage.css";

function CartPage() {
	const { cart } = useCart(); // Obtener los datos del carrito desde el contexto

	// Calcular el total del carrito
	const totalItems = cart.length;
	const totalPrice = cart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	const handleCleanCart = () => {
		clearCart(); // Llama a la función para vaciar el carrito
	};

	return (
		<Container className="shopping-cart-container">
			<Row>
				<Col
					md={8}
					className="shopping-cart"
				>
					<Row className="header">
						<Col
							className="header-title"
							md={10}
						>
							Carrito de compras
						</Col>
						<Col
							className="header-subtitle"
							md={2}
						>
							{totalItems} Items
						</Col>
					</Row>
					<Row className="cart-header">
						<Col
							className="cart-header-text"
							md={3}
						>
							Detalle de Producto
						</Col>
						<Col
							className="cart-header-text"
							md={2}
						></Col>
						<Col
							className="cart-header-text justify-content-center"
							md={3}
						>
							Cantidad
						</Col>
						<Col
							className="cart-header-text"
							md={2}
						>
							Precio
						</Col>
						<Col
							className="cart-header-text"
							md={2}
						>
							Total
						</Col>
					</Row>
					<ListGroup
						className="container-item-component"
						variant="flush"
					>
						{cart.map((item) => (
							<Cart_item_component
								key={item.id} // Asegúrate de que cada item tenga un id único
								item={item}
							/>
						))}
					</ListGroup>
					<Row>
						<Col>
							<a
								href="#continue-shopping"
								className="continue-shopping"
							>
								Continar comprando
							</a>
						</Col>
						<Col>
							<Button
								href="#continue-shopping"
								className="VaciarCarrito"
								onClick={handleCleanCart}
							>
								Vaciar carrito
							</Button>
						</Col>
					</Row>
				</Col>
				<Col
					md={4}
					className="order-summary"
				>
					<Card>
						<Card.Body>
							<Card.Title>Resumen de Orden</Card.Title>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<Row>
										<Col className="blackColor">Items</Col>
										<Col className="text-right blackColor">{totalItems}</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col className="blackColor">Envio</Col>
										<Col className="text-right blackColor">$5.00</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row className="align-items-center">
										<Col
											md={4}
											className="blackColor"
										>
											Codigo
										</Col>
										<Col>
											<Form.Control
												type="text"
												placeholder="Ingresa tu codigo"
											/>
										</Col>
									</Row>
									<Col>
										<Button
											variant="danger"
											className="apply-button"
										>
											Aplicar
										</Button>
									</Col>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col className="blackColor">Total Cost</Col>
										<Col className="text-right blackColor">
											${totalPrice.toFixed(2) + 5.0}{" "}
											{/* Sumando el coste del envío */}
										</Col>
									</Row>
								</ListGroup.Item>
							</ListGroup>
							<Button
								variant="primary"
								className="checkout-button"
							>
								CHECKOUT
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default CartPage;
