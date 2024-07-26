import { useState } from "react";
import { Link } from "react-router-dom";
import "./style-cart.css";

function Cart({ cantItem }) {
	// desestructuro el objeto
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Link
			className="cart-container"
			to={"carrito"}
		>
			<a
				className="cart"
				href="#"
				// onClick={handleShow}
			>
				<i className="fas fa-shopping-cart" />
			</a>
			<span className="text-cart">{cantItem}</span>
		</Link>
	);
}

export default Cart;
