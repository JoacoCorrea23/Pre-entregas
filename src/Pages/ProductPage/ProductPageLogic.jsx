import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import ProductPage from "./ProductPage";

function ProductPageLogic() {
	const { id } = useParams();
	let url;

	if (id === "Todos" || id == null) {
		url = "https://fakestoreapi.com/products";
	} else {
		url = `https://fakestoreapi.com/products/category/${id}`;
	}

	const { data, loading, error } = useFetch(url);

	if (loading) {
		return <div className="containerLoading"> Cargando ... </div>;
	}

	if (error) {
		return <div className="containerLoading"> Error : {error.message} </div>;
	}
	return <ProductPage items={data} />;
}

export default ProductPageLogic;
