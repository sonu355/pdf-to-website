import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const img1 = require("../assets/img1.jpeg");

const Page1 = () => {
  return (
    <div className="container" style={{ marginTop: "150px", marginLeft: "200px" }}>
        <Row className="d-flex container">
            <Col md={6} sm={12}>
                <h1 style={{ fontWeight: "bolder" }}>
                    Become a <br />
                    Technology
                    <br />
                    Partner
                </h1>
                <span>
                    Help your clients automate and upgrade their marketing.
                    <br /> Solve critical pain points and offer innovative <br />
                    solutions to expand your business.
                </span>
                <br />
                <Button variant="success" style={{ marginTop: "20px" }}>
                    Apply now
                </Button>
            </Col>
            <Col md={6} sm={12}>
                <img src={img1} height="450px" alt="/"></img>
            </Col>
        </Row>
            <h1>
                Become a <br />
                Technology
                <br />
                Partner
            </h1>
            <span>
                Help your clients automate and upgrade their marketing. 
                Solve critical pain <br />points and offer innovative solutions to expand your business.
            </span>
            <h6 style={{ fontWeight: "bolder" , marginTop:'25px'}}>BUTTONS - START BUILDING EXPLORE APIs</h6>
        <Row className="d-flex container" style={{ marginTop:'50px'}}>
            <Col>
                <h2>Discover the simplicity of<br /> one platform that<br /> connects your buisness</h2>
                <Button variant="dark" style={{ borderRadius:'none', marginTop:'10px'}}>One Platform</Button>
            </Col>
            <Col>
                <Row >
                    <Col><Button variant="none" style={{border:'0.5px solid grey', borderRadius:'30px'}}>DMS</Button></Col>
                    <Col><Button variant="none" style={{border:'0.5px solid grey', borderRadius:'30px', marginLeft:"-17vh"}}>Service experience</Button></Col>
                    <Col><Button variant="none" style={{border:'0.5px solid grey', borderRadius:'30px',  marginLeft:"-21vh"}}>Zero-Contact Sales</Button></Col>
                </Row>
                <Row className="mt-2 mb-2">
                    <Col><Button variant="none" style={{border:'0.5px solid grey', borderRadius:'30px'}}>Zero-Contact Servie</Button></Col>
                    <Col><Button variant="none" style={{border:'0.5px solid grey', borderRadius:'30px',  marginLeft:"-16vh"}}>Advanced Analytics</Button></Col>
                </Row>
                <Row>
                    <Col><Button variant="none" style={{border:'0.5px solid grey', borderRadius:'30px'}}>Open APIs</Button></Col>
                    <Col><Button variant="none" style={{border:'0.5px solid grey', borderRadius:'30px', marginLeft:"-12vh"}}>CRM</Button></Col>
                    <Col><Button variant="none" style={{border:'0.5px solid grey', borderRadius:'30px', marginLeft:"-29vh"}}>Digital Retails</Button></Col>
                </Row>
            </Col>
        </Row>    
        <Row style={{ marginTop:'50px'}}>
            <Col>
                <h2>Discover the next generation <br/>
                    of marketing-centric open APIs.
                </h2>
                <h6 style={{marginTop:'20px'}}>
                    <span style={{ fontWeight: 'bolder'}}>Button </span>
                 - See Use Cases
                </h6>
            </Col>
            <Col style={{ fontWeight:'bold'}}>
                <Row>
                    <Col>Cross-Marketing</Col>
                    <Col style={{marginLeft:'-43vh'}}>Rewards & Incentives</Col>
                </Row>
                <Row className="mt-3 mb-3">
                    <Col>CRM</Col>
                    <Col style={{marginLeft:'-63vh'}}>Buyer Journey Optimization</Col>
                </Row>
                <Row>
                    <Col>Data Collection</Col>
                    <Col style={{marginLeft:'-46vh'}}>Social Tools</Col>
                </Row>
            </Col>
        </Row>
    </div>
  );
};

export default Page1;
