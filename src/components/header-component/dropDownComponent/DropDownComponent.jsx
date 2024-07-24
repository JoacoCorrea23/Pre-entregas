import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function DropDownComponent({ category }) {
	return (
		<>
			<NavDropdown.Item>
				<Link
					as={Link}
					to={`/products/category/${category}`}
				>
					{category}
				</Link>
			</NavDropdown.Item>
		</>
	);
}

export default DropDownComponent;
