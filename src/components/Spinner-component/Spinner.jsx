import React from "react";
import "./SpinnerStyle.css"; // Importa el archivo CSS para los estilos

const LoadingSpinner = () => {
	return (
		<div className="spinner-container">
			<div className="spinner">
				<div className="dot dot1"></div>
				<div className="dot dot2"></div>
				<div className="dot dot3"></div>
				<div className="dot dot4"></div>
				<div className="dot dot5"></div>
				<div className="dot dot6"></div>
				<div className="dot dot7"></div>
				<div className="dot dot8"></div>
				{/* <div className="dot dot9"></div> */}
			</div>
		</div>
	);
};

export default LoadingSpinner;
