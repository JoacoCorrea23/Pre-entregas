import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PrincipalPicture from '../../../assets/Coffe.png';
import './style-initialBody.css';


function MyBody({text1,text2,text3,text4}) {
  return (
    <Container>
      <div className="content-home">
        <Row className="content-home2">
          <Col lg={6} md={5}>
            <div className="box-container">
              {/* <h1>{text1}</h1> */}
              <img className="img-coffe" src={PrincipalPicture} alt="Vaso de cafe" />
            </div>
          </Col>
          <Col lg={5} md={7}>
            <div className="box-container2">
              <h3 className="home-heading">
                {text2} <span>{text3}</span>
              </h3>
              <p className='para-home'>{text4}</p>
              <div className="btn-home">
                <a href="#" className="home-links">Compralo ahora</a>
                <a href="#" className="home-links btn-2">Explora</a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default MyBody