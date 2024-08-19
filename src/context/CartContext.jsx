import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	setDoc,
	updateDoc,
} from "firebase/firestore";
import React, { createContext, useContext } from "react";
import { db } from "../Firestone/Firestone_Config";

// Crear el contexto del carrito
const CartContext = createContext();

// Hook personalizado para acceder al contexto del carrito
const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart debe ser usado dentro de un CartProvider");
	}
	return context;
};

// Crear el proveedor del contexto
const CartProvider = ({ children, value }) => {
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Función para agregar un producto al carrito y actualizar Firebase
const addProductToCart = async (product, quantity, cart, setCart) => {
	// Verifica si el producto ya está en el carrito
	const productInCart = cart.find((item) => item.id === product.id);
	let updatedCart;
	if (productInCart) {
		// Verifica si cartItemId existe en productInCart
		if (!productInCart.cartItemId) {
			console.error(
				"cartItemId no está definido para el producto:",
				productInCart
			);
			return;
		}

		// Si ya está, actualiza la cantidad en el estado local
		updatedCart = cart.map((item) =>
			item.id === product.id
				? { ...item, quantity: item.quantity + quantity }
				: item
		);

		// Actualiza la cantidad en Firebase usando el cartItemId
		try {
			const cartRef = doc(db, "carts", productInCart.cartItemId);
			await updateDoc(cartRef, {
				quantity: productInCart.quantity + quantity,
			});
		} catch (error) {
			console.error("Error al actualizar el carrito en Firebase:", error);
		}
	} else {
		// Si no está, lo agrega al estado local y a Firebase
		updatedCart = [...cart, { ...product, quantity }];

		try {
			const newCartItemRef = doc(collection(db, "carts"));
			await setDoc(newCartItemRef, {
				product: product.id,
				quantity,
			});
		} catch (error) {
			console.error(
				"Error al agregar el producto al carrito en Firebase:",
				error
			);
		}
	}

	// Actualiza el estado del carrito
	setCart(updatedCart);
};

// Función para eliminar un producto del carrito
const removeProductFromCart = async (productId, cart, setCart) => {
	const updatedCart = cart.filter((item) => item.id !== productId);
	setCart(updatedCart);

	try {
		// Eliminar el producto de Firebase
		const cartItemRef = doc(db, "carts", productId);
		await deleteDoc(cartItemRef);
	} catch (error) {
		console.error(
			"Error al eliminar el producto del carrito en Firebase:",
			error
		);
	}
};

//
const modifyProductFromCart = async (product, quantity, cart, setCart) => {
	try {
		// Referencia al documento del producto
		const productRef = doc(db, "carts", product.cartItemId);

		// Actualizar el campo quantity del producto
		await updateDoc(productRef, {
			quantity: quantity,
		});
	} catch (error) {
		console.error(
			"Error al actualizar la cantidad del producto en Firestore:",
			error
		);
	}
};

// Función para vaciar la colección de productos
const clearCollection = async (collectionName) => {
	try {
		// Referencia a la colección
		const collectionRef = collection(db, collectionName);

		// Obtener todos los documentos de la colección
		const querySnapshot = await getDocs(collectionRef);

		// Eliminar cada documento
		for (const docSnapshot of querySnapshot.docs) {
			await deleteDoc(docSnapshot.ref); // Usa docSnapshot.ref directamente
		}
	} catch (error) {
		console.error("Error al vaciar la colección:", error);
	}
};

// Función para vaciar el carrito
const clearCart = async () => {
	await clearCollection("carts");
};

export {
	addProductToCart,
	CartContext,
	CartProvider,
	clearCart,
	modifyProductFromCart,
	removeProductFromCart,
	useCart,
};
// const item ={product:product.id,quantity:cantidad,}

// const itemCollection = collection(db,"carts");
// addDoc(itemCollection,item).then((id) => {
//   console.log(id),
//   console.log("item agregado correctamente")
// })
