import Button from "react-bootstrap/Button";
import "./style-item-button-component.css";

function Btn_cantidad({ quantity, stock, increaseTenure, decreaseTenure }) {
	return (
		<div className="tenure-buttons">
			<Button
				variant="outline-secondary"
				className="btn"
				onClick={decreaseTenure}
				disabled={quantity <= 1}
			>
				-
			</Button>
			<span className="tenure-value">{quantity}</span>
			<Button
				variant="outline-secondary"
				className="btn"
				onClick={increaseTenure}
				disabled={quantity >= stock}
			>
				+
			</Button>
		</div>
	);
}

export default Btn_cantidad;

// import Button from "react-bootstrap/Button";
// import "./style-item-button-component.css";

// function Btn_cantidad({ quantity, stock }) {
// 	return (
// 		<div className="tenure-buttons">
// 			<Button
// 				variant="outline-secondary"
// 				className="btn"
// 				// onClick={decreaseTenure}
// 			>
// 				-
// 			</Button>
// 			<span className="tenure-value">{quantity}</span>
// 			<Button
// 				variant="outline-secondary"
// 				className="btn"
// 				// onClick={increaseTenure}
// 			>
// 				+
// 			</Button>
// 		</div>
// 	);
// }

// export default Btn_cantidad;
