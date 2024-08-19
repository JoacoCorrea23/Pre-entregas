import { useLocation, useParams } from "react-router-dom";
import ProductDetail from "./singleProductComponent";

function ProductDetailLogic() {
	const { id } = useParams();
	const location = useLocation();
	const product = location.state?.product;

	if (!product) {
		return <div className="containerLoading">Producto no encontrado.</div>;
	}

	return <ProductDetail item={product} />;
}

export default ProductDetailLogic;
