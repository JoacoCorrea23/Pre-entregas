import ProductCard from "../../components/ProductCard/ProductCard";
import PageContainer from "../PageContainer/PageContainer";
import "./ProductPageStyle.css";

function ProductPage({ items }) {
	return (
		<PageContainer>
			<h1 className="pheading">Nuestros Productos</h1>
			<section className="sec">
				<ul className="products">
					{items.map((prod) => (
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
