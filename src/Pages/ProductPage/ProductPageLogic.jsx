import React from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/Spinner-component/Spinner";
import useProducts from "../../customHooks/useProducts";
import ProductPage from "./ProductPage";

function ProductPageLogic() {
	const { id } = useParams();
	const { products, loading, error } = useProducts(); // Usamos el hook useProducts para obtener todos los productos

	if (loading) {
		return (
			<div className="containerLoading">
				{" "}
				<LoadingSpinner />{" "}
			</div>
		);
	}

	if (error) {
		return <div className="containerLoading"> Error : {error.message} </div>;
	}

	// Decodificamos el id de la URL para convertir "%20" en espacios
	const decodedId = id ? decodeURIComponent(id) : "Todos";

	// Filtramos productos si hay un id de categoría
	const filteredProducts =
		decodedId === "Todos"
			? products
			: products.filter((product) => product.categoryName === decodedId);

	return <ProductPage items={filteredProducts} />;
}

export default ProductPageLogic;
