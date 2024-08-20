import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Outlet } from "react-router-dom";
import useCategories from "../../../customHooks/useCategories";
import LoadingSpinner from "../../Spinner-component/Spinner";
import Cart from "../cart-component/cart";
import DropDownComponent from "../dropDownComponent/DropDownComponent";
import "./navbar-style.css";

function MyNavbar({ titulo, cantItemCart }) {
	// const { data, loading, error } = useFetch(
	// 	"https://fakestoreapi.com/products/categories"
	// );

	const { data: categories, loading, error } = useCategories();

	if (loading) {
		return (
			<div className="containerLoading">
				{" "}
				<LoadingSpinner />{" "}
			</div>
		);
	}

	if (error) {
		return <div className="containerLoading"> Error : {error.message} </div>;
	}
	return (
		<>
			<Navbar
				className="navBar_class fixed-top"
				collapseOnSelect
				expand="lg"
			>
				<Container>
					<Navbar.Brand
						as={Link}
						to={"productos"}
						className="logo text-uppercase"
					>
						{titulo}
					</Navbar.Brand>
					<Navbar.Toggle
						className="custom-toggler"
						aria-controls="navbarNav"
					/>
					<Navbar.Collapse id="navbarNav">
						<Nav className="ms-auto">
							<Nav.Item className="nav-item">
								<Nav.Link
									as={Link}
									className="nav-link"
									to={"home"}
									aria-current="page"
								>
									Home
								</Nav.Link>
							</Nav.Item>
							<Nav.Item className="nav-item">
								<Nav.Link
									as={Link}
									className="nav-link"
									to={"nosotros"}
								>
									About Us
								</Nav.Link>
							</Nav.Item>
							<NavDropdown
								title="Products"
								id="basic-nav-dropdown"
								className="unDropDown"
								to={/productos/}
							>
								{categories &&
									categories.map((category) => (
										<DropDownComponent
											key={category.id}
											category={category.name}
										/>
										// <li key={category.id}>{category.name}</li>
									))}
								{/* {data.map((cat) => (
									<DropDownComponent
										key={cat}
										category={cat}
									/>
								))} */}
								<DropDownComponent category={"Todos"} />
							</NavDropdown>
							<Nav.Item className="nav-item">
								<Nav.Link
									className="nav-link"
									as={Link}
									to={"contacto"}
								>
									Contact
								</Nav.Link>
							</Nav.Item>
							<Cart cantItem={cantItemCart} />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
}

export default MyNavbar;
