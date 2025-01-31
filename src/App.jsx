import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PrincipalPicture from "./assets/Coffe.png";
import CartPage from "./components/CartPage-component/CartPage";
import MyNavbar from "./components/header-component/Navbar-component/MyNavbar";
import { CartProvider, useCart } from "./context/CartContext"; // Importa el contexto correctamente
import useFetchCart from "./customHooks/useFetchCart";
import AboutUsPage from "./Pages/AboutUsPage/aboutUsPage";
import Contacto from "./Pages/ContactPage/contactPage";
import HomeSection from "./Pages/HomePage/HomePage";
import NoPage from "./Pages/NoPage/noPageComponent";
import ProductDetailLogic from "./Pages/productDetail/singleProductComponentLogic";
import ProductPageLogic from "./Pages/ProductPage/ProductPageLogic";

function App() {
	const [cart, setCart] = useState([]);
	const { cartItems, loading, error } = useFetchCart();

	// Inicializar el carrito al iniciar la aplicación
	useEffect(() => {
		if (cartItems && !loading && !error) {
			setCart(cartItems); // Cargar los datos iniciales del carrito
		}
	}, [cartItems, loading, error]);

	return (
		<CartProvider value={{ cart, setCart }}>
			<BrowserRouter>
				<CartWrapper />
			</BrowserRouter>
		</CartProvider>
	);
}

const CartWrapper = () => {
	const { cart } = useCart();
	const cartItemCount = cart.length;

	return (
		<Routes>
			<Route
				exact
				path="/"
				element={
					<MyNavbar
						titulo={"Macchiato's"}
						cantItemCart={cartItemCount}
					/>
				}
			>
				<Route
					path="/home"
					element={
						<HomeSection
							text1="Bienvenidos a mi tienda de Cafe"
							text2="Las mejores variedades de Cafe"
							text3="Para tus gustos"
							text4="Lorem ipsum dolor sit amet."
							PrincipalPicture={PrincipalPicture}
						/>
					}
				/>
				<Route
					exact
					path="/"
					element={<ProductPageLogic />}
				/>
				<Route
					exact
					path="/productos"
					element={<ProductPageLogic />}
				/>
				<Route
					path="/carrito"
					element={<CartPage />}
				/>
				<Route
					path="/contacto"
					element={<Contacto />}
				/>
				<Route
					path="/nosotros"
					element={<AboutUsPage />}
				/>
				<Route
					path="/products/:id"
					element={<ProductDetailLogic />}
				/>
				<Route
					path="/products/category/:id"
					element={<ProductPageLogic />}
				/>
				<Route
					path="*"
					element={<NoPage />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
