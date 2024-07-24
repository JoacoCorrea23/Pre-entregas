import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Btn_cantidad from "../../item-button-component/item-button-component";
import "./style-cart-item-component.css";

//TODO clase 13/07 03:01:56

function cart_item_component({
	picture,
	unitPrice,
	totalPrice,
	quantity,
	title,
	subtitle,
}) {
	return (
		<ListGroup.Item>
			<Row className="align-items-center">
				<Col md={2}>
					<img
						src={picture}
						className="product-image"
					/>
				</Col>
				<Col md={3}>
					<p className="titles">{title}</p>
					<p className="titles">{subtitle}</p>
					<a href="#remove">Remove</a>
				</Col>
				<Col md={3}>
					<Btn_cantidad
						quantity={quantity}
						stock={10}
					/>
				</Col>
				<Col
					className="blackColor"
					md={2}
				>
					{unitPrice}
				</Col>
				<Col
					className="blackColor"
					md={2}
				>
					{totalPrice}
				</Col>
			</Row>
		</ListGroup.Item>
	);
}

export default cart_item_component;
