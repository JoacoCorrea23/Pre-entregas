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
                        <Nav.Item className="nav-item">
                            <Nav.Link className='nav-link' href="#" aria-current="page">Home</Nav.Link>
                        </Nav.Item>            
                        <Nav.Item className="nav-item">        
                            <Nav.Link className='nav-link' href="#">About Us</Nav.Link>
                        </Nav.Item> 
                        <Nav.Item className="nav-item">
                            <Nav.Link className='nav-link' href="#">Coffee</Nav.Link>
                        </Nav.Item> 
                        <Nav.Item className="nav-item">
                            <Nav.Link className='nav-link' href="#">Contact</Nav.Link>    
                        </Nav.Item>                      
                        <Cart cantItem={cantItemCart}/>                                                                              
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
    
export default MyNavbar;