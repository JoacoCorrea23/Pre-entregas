import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PageContainer from "../PageContainer/PageContainer";
import "./style-homeSection.css";

function HomeSection({ text1, text2, text3, text4, PrincipalPicture }) {
	return (
		<PageContainer>
			<Row className="content-home2">
				<Col
					lg={6}
					md={5}
				>
					<div className="box-container">
						<img
							className="img-coffe"
							src={PrincipalPicture}
							alt="Vaso de cafe"
						/>
					</div>
				</Col>
				<Col
					lg={5}
					md={7}
				>
					<div className="box-container2">
						<h3 className="home-heading">
							{text2} <span className="home-span">{text3}</span>
						</h3>
						<p className="para-home">{text4}</p>
						<div className="btn-home">
							<a
								href="#"
								className="home-links"
							>
								Comprar ahora
							</a>
							<a
								href="#"
								className="home-links btn-2"
							>
								Explora
							</a>
						</div>
					</div>
				</Col>
			</Row>
		</PageContainer>
	);
}

export default HomeSection;
