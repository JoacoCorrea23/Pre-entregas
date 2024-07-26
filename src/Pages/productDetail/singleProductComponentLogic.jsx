import { useParams } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import ProductDetail from "./singleProductComponent";

function ProductDetailLogic() {
	const { id } = useParams();
	const { data, loading, error } = useFetch(
		`https://fakestoreapi.com/products/${id}`
	);

	if (loading) {
		return <div className="containerLoading"> Cargando ... </div>;
	}

	if (error) {
		return <div className="containerLoading"> Error : {error.message} </div>;
	}
	return <ProductDetail item={data} />;
}

export default ProductDetailLogic;
