import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./style-cartPage.css";
// import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import Picture from "../../assets/BolsaCoffe.jpg";
import Cart_item_component from "./cart-item-component/cart-item-component";

function CartPage() {
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
							3 Items
						</Col>
					</Row>
					<Row className="cart-header">
						<Col
							className="cart-header-text"
							md={3}
						>
							Product Details
						</Col>
						<Col
							className="cart-header-text"
							md={2}
						></Col>
						<Col
							className="cart-header-text justify-content-center"
							md={3}
						>
							Quantity
						</Col>
						<Col
							className="cart-header-text"
							md={2}
						>
							Price
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
						<Cart_item_component
							picture={Picture}
							unitPrice="44.00"
							totalPrice="88.00"
							quantity="2"
							title="Platinum headset"
							subtitle=""
						/>
						<Cart_item_component
							picture={Picture}
							unitPrice="44.00"
							totalPrice="88.00"
							quantity="2"
							title="Platinum headset"
							subtitle=""
						/>
						<Cart_item_component
							picture={Picture}
							unitPrice="44.00"
							totalPrice="88.00"
							quantity="2"
							title="Platinum Headset"
							subtitle="PS4"
						/>
					</ListGroup>
					<a
						href="#continue-shopping"
						className="continue-shopping"
					>
						Continue Shopping
					</a>
				</Col>
				<Col
					md={4}
					className="order-summary"
				>
					<Card>
						<Card.Body>
							<Card.Title>Order Summary</Card.Title>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<Row>
										<Col className="blackColor">Items</Col>
										<Col className="text-right blackColor">3</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col className="blackColor">Shipping</Col>
										<Col className="text-right blackColor">£5.00</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row className="align-items-center">
										<Col
											md={4}
											className="blackColor"
										>
											Promo Code
										</Col>
										<Col>
											<Form.Control
												type="text"
												placeholder="Enter your code"
											/>
										</Col>
									</Row>
									<Col>
										<Button
											variant="danger"
											className="apply-button"
										>
											APPLY
										</Button>
									</Col>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col className="blackColor">Total Cost</Col>
										<Col className="text-right blackColor">£462.98</Col>
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

{
	/* <Cart_item_component
    picture={Picture}
    unitPrice="44.00"
    totalPrice="88.00"
    quantity="2"
/> */
}
