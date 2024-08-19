import { useEffect, useState } from "react";
import { getProducts } from "../Firestone/calls";

const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const data = await getProducts();
				setProducts(data);
				setLoading(false);
			} catch (err) {
				setError(err);
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	return { products, loading, error };
};

export default useProducts;
