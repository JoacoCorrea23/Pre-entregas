import { Button, Col, Image, Row } from "react-bootstrap";
import Btn_cantidad from "../../components/item-button-component/item-button-component";
import "./singleProductComponent.css";

function ProductDetail({ item }) {
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
							{item.category}
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
						<Btn_cantidad quantity={1} />
					</div>
					<p className="booking-info">{item.description}</p>
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
