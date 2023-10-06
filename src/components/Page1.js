import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const img1 = require("../assets/img1.jpeg");

const Page1 = () => {
  return (
    <div  style={{ marginTop: "150px", marginLeft: "200px", marginBottom: '150px', marginRight:'200px' }}>
        <Row className="d-flex  mx-auto">
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
                <Button variant="success" style={{ marginTop: "20px" }} >
                    Start Building
                </Button>
                <Button variant="success" style={{ marginTop: "20px", marginLeft:'10px'}} >
                    Explore APIs
                </Button>
            </Col>
            <Col md={6} sm={12}>
                <img src={img1} height="450px" alt="/"></img>
            </Col>
        </Row>
        <Row className="d-flex container" style={{ marginTop:'50px'}}>
            <Col sm={12} md={6}>
                <h2>Discover the simplicity of<br /> one platform that<br /> connects your buisness</h2>
                <Button variant="dark" style={{ borderRadius:'none', marginTop:'10px'}}>See Use Cases</Button>
            </Col>
            <Col sm={12} md={6} style={{ marginLeft:"-0vh"}}>
                <Row >
                    <Col sm={4} md={4}><Button variant="none" style={{border:'0.5px solid grey', borderRadius:'30px'}}>Cross-Marketing</Button></Col>
                    <Col sm={4} md={4}><Button variant="none" style={{border:'0.5px solid grey', borderRadius:'30px',marginLeft:'0vh'}}>Rewards & incentives</Button></Col>
                </Row>
                <Row className="mt-2 mb-2">
                    <Col sm={6} md={6}><Button variant="none" style={{border:'0.5px solid grey', borderRadius:'30px'}}>CRM</Button></Col>
                    <Col sm={6} md={6}><Button variant="none" style={{border:'0.5px solid grey', borderRadius:'30px',  marginLeft:"-22vh"}}>Buyer Journey Optimization</Button></Col>
                </Row>
                <Row>
                    <Col sm={4} md={4}><Button variant="none" style={{border:'0.5px solid grey', borderRadius:'30px'}}>Data Collection</Button></Col>
                    <Col sm={4} md={4}><Button variant="none" style={{border:'0.5px solid grey', borderRadius:'30px', marginLeft:"-1vh"}}>Social Tools</Button></Col>
                </Row>
            </Col>
        </Row>    
    </div>
  );
};

export default Page1;
