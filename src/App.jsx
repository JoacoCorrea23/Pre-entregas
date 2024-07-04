import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import MyBody from './components/body-components/centerBody-component/MyBody';
import MyNavbar from './components/header-component/Navbar-component/MyNavbar';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="header">
      <Container fluid className="gx-0">
        { /* navbar Start  */ }
        <MyNavbar titulo="Macchiato's" cantItemCart="6"/>

        { /* home content Starts */ }
        <MyBody text1="Bienvenidos a mi tienda de Cafe" text2="Las mejores variedades de Cafe" text3="Para tus gustos" text4="Lorem ipsum dolor sit amet."/>
      </Container>
    </div>       
  )
}

export default App
