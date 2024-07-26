import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../customHooks/useFetch";
import PageContainer from "../PageContainer/PageContainer";
import "./ProductPageStyle.css";

// import { useEffect } from "react";

function ProductPage() {
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

	return (
		<PageContainer>
			<h1 className="pheading">Nuestros Productos</h1>
			<section className="sec">
				<ul className="products">
					{data.map((prod) => (
						<li
							className="card"
							key={prod.id}
						>
							<ProductCard
								id={prod.id}
								item={prod}
							/>
						</li>
					))}
				</ul>
			</section>
		</PageContainer>
	);
}

export default ProductPage;
