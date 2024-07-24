import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PrincipalPicture from "./assets/Coffe.png";
import CartPage from "./components/CartPage-component/CartPage";
import AboutUsPage from "./components/aboutUsPage";
import HomeSection from "./components/body-components/Home-component/homeSection";
import NoPage from "./components/body-components/Home-component/noPageComponent";
import Contacto from "./components/contactPage";
import MyNavbar from "./components/header-component/Navbar-component/MyNavbar";
import SectionProducto from "./components/product-component/SectionProducto";
import ProductDetail from "./components/product-component/otros/productDetail/singleProductComponent";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					exact
					path="/"
					element={
						<MyNavbar
							titulo={"Macchiato's"}
							cantItemCart={6}
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
						element={<SectionProducto />}
					/>
					<Route
						exact
						path="/productos"
						element={<SectionProducto />}
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
						element={<ProductDetail />}
					/>
					<Route
						path="/products/category/:id"
						element={<SectionProducto />}
					/>

					<Route
						path="*"
						element={<NoPage />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import PrincipalPicture from "./assets/Coffe.png";
// import CartPage from "./components/CartPage-component/CartPage";
// import HomeSection from "./components/body-components/Home-component/homeSection";
// import PrincipalContainer from "./components/body-components/principalContainer";
// import MyNavbar from "./components/header-component/Navbar-component/MyNavbar";
// import SectionProducto from "./components/product-component/SectionProducto";
// // import NoPage from "./components/body-components/Home-component/noPageComponent"

// function App() {
// 	return (
// 		<BrowserRouter>
// 			<Routes>
// 				<Route
// 					exact
// 					path="/"
// 					element={
// 						<MyNavbar
// 							titulo={"Macchiato's"}
// 							cantItemCart={6}
// 						/>
// 					}
// 				>
// 					{
// 						/* <MyNavbar
// 						titulo="Macchiato's"
// 						cantItemCart={
// 							6
// 						} /* el numero que se le pasa al navBar es el length del arreglo que contiene los productos del carrito*/
// 						/> */
// 					}
// 					<PrincipalContainer>
// 						<HomeSection
// 							text1="Bienvenidos a mi tienda de Cafe"
// 							text2="Las mejores variedades de Cafe"
// 							text3="Para tus gustos"
// 							text4="Lorem ipsum dolor sit amet."
// 							PrincipalPicture={PrincipalPicture}
// 						/>
// 						<SectionProducto />
// 						<CartPage />
// 					</PrincipalContainer>
// 				</Route>
// 			</Routes>
// 		</BrowserRouter>
// 	);
// }

// export default App;
