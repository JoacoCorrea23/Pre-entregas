import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./Firestone_Config";

export async function getCategories() {
	const categoriesRef = collection(db, "categorys");
	const categoriesSnapshot = await getDocs(categoriesRef);

	const categories = categoriesSnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	return categories;
}
export async function getProducts() {
	const productsRef = collection(db, "products");
	const categoriesRef = collection(db, "categorys");

	const productsSnapshot = await getDocs(productsRef);
	const products = [];

	for (let productDoc of productsSnapshot.docs) {
		const productData = productDoc.data();

		// Obtener el ID de la categoría del producto
		const categoryId = productData.category;

		try {
			// Obtener el documento de la categoría por ID
			const categoryDoc = await getDoc(doc(categoriesRef, categoryId));

			// Si la categoría existe, agrega su nombre al producto
			if (categoryDoc.exists()) {
				products.push({
					id: productDoc.id,
					...productData,
					categoryName: categoryDoc.data().name,
				});
			} else {
				// Si no existe, asignar un valor por defecto
				products.push({
					id: productDoc.id,
					...productData,
					categoryName: "Categoría desconocida",
				});
			}
		} catch (error) {
			console.error(
				`Error al obtener la categoría con ID ${categoryId}:`,
				error
			);
			products.push({
				id: productDoc.id,
				...productData,
				categoryName: "Categoría desconocida",
			});
		}
	}

	return products;
}

// export async function getProducts() {
// 	const productsRef = collection(db, "products");
// 	const productsSnapshot = await getDocs(productsRef);

// 	const products = productsSnapshot.docs.map((doc) => ({
// 		id: doc.id,
// 		...doc.data(),
// 	}));

// 	return products;
// }
