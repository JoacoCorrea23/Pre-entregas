import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from '../cart-component/cart';
import './navbar-style.css';


function MyNavbar({titulo,cantItemCart}) { // desestructuro el objeto
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#" className="logo text-uppercase">{titulo}</Navbar.Brand>
                <Navbar.Toggle className='custom-toggler' aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto">
                        <Nav.Link className='myItemLnk' href="#" aria-current="page">Home</Nav.Link>
                        <Nav.Link className='myItemLnk' href="#">About Us</Nav.Link>
                        <Nav.Link className='myItemLnk' href="#">Coffee</Nav.Link>
                        <Nav.Link className='myItemLnk' href="#">Contact</Nav.Link>                        
                        <Cart cantItem={cantItemCart}/>                                                     
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
    
export default MyNavbar;



{/* <header className="header">    
        <a href="#" className="logo text-white font-weight-bold">
            {titulo} 
        </a>
        <div className="containerNavbar-cart">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link titles active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link titles" href="#">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link titles" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link titles" href="#">Contact</a>
                        </li>
                    </ul>      
            <Cart cantItem={cantItemCart}/>
        </div>       
    </header> */}