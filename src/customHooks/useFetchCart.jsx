import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firestone/Firestone_Config"; // Asegúrate de que esto apunta a tu configuración de Firebase

function useFetchCart() {
	const [cartItems, setCartItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Suscribirse a los cambios en la colección de "carts"
		const unsubscribe = onSnapshot(
			collection(db, "carts"),
			async (snapshot) => {
				try {
					// Extraer los items del carrito
					const cartData = await Promise.all(
						snapshot.docs.map(async (cartDoc) => {
							const cartItemId = cartDoc.id;
							const { product: productId, quantity } = cartDoc.data();

							// Obtener datos del producto correspondiente
							const productDoc = await getDoc(doc(db, "products", productId));
							if (productDoc.exists()) {
								const productData = productDoc.data();

								// Obtener nombre de la categoría
								const categoryDoc = await getDoc(
									doc(db, "categories", productData.category)
								);
								const categoryName = categoryDoc.exists()
									? categoryDoc.data().name
									: "Categoría desconocida";

								return {
									cartItemId,
									id: productId,
									...productData,
									quantity,
									categoryName,
								};
							}
							return null;
						})
					);

					// Filtrar cualquier elemento nulo (en caso de productos no encontrados)
					setCartItems(cartData.filter((item) => item !== null));
				} catch (err) {
					setError(err);
				} finally {
					setLoading(false);
				}
			},
			(err) => {
				setError(err);
				setLoading(false);
			}
		);

		// Limpiar la suscripción cuando el componente se desmonte
		return () => unsubscribe();
	}, []);

	return { cartItems, loading, error };
}

export default useFetchCart;
