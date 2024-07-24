import { useParams } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import ProductCard from "./otros/ProductCard";
import "./sectionProductStyle.css";
// import { useEffect } from "react";

function SectionProducto() {
	const { id } = useParams();
	// const { data, loading, error } = useFetch(
	// 	"https://fakestoreapi.com/products/category/jewelery"
	// );

	let url;

	if (id === "Todos" || id == null) {
		url = "https://fakestoreapi.com/products";
	} else {
		url = `https://fakestoreapi.com/products/category/${id}`;
	}

	// url = `https://fakestoreapi.com/products/category/${id}`;
	const { data, loading, error } = useFetch(url);

	if (loading) {
		return <div className="containerLoading"> Cargando ... </div>;
	}

	if (error) {
		return <div className="containerLoading"> Error : {error.message} </div>;
	}

	return (
		<div className="info-container">
			<h1 className="pheading">Nuestros Productos</h1>
			{/* <h2>este es el id : {id} : paso algo ?</h2> */}
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
		</div>
	);
}

export default SectionProducto;
