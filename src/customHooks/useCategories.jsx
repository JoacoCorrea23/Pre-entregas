// useCategories.jsx
import { useEffect, useState } from "react";
import { getCategories } from "../Firestone/calls"; // Importa la función para obtener categorías desde Firestore

const useCategories = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const categories = await getCategories();
				setData(categories);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchCategories();
	}, []);

	return { data, loading, error };
};

export default useCategories;
