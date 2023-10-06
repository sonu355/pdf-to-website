import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const logo = require('../assets/logo12.jpeg')
const Page2 = () => {
  return (
    <div className="container" style={{ marginTop: "150px", marginLeft: "200px", marginBottom: '150px', marginRight:'200px' }}>
        <Row>
            <Col style={{ marginTop:'0px', marginLeft:'30px'}}>
                <h1>
                    Why build on &nbsp;
                    <span style={{fontWeight: 'bolder'}}>XIRCLS?</span>
                </h1>
                <span>
                    We empower you to leverage our 100+ brand<br />
                     network and powerful functionalities to<br />
                      build industry-shaping apps 
                    that will<br /> 
                    delight your clients and impress<br /> your peers.
                </span>
            </Col>
            <Col style={{ marginLeft:'-10vh'}}>
                <img src={logo} width='220px' alt='/'></img>
            </Col>
        </Row>
    </div>
  )
}

export default Page2
