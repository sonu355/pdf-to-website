import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const login = require('../assets/login.png')
const Page5 = () => {
  return (
    
    <div  style={{ marginTop: "150px", marginLeft: "200px", marginBottom: '150px', marginRight:'200px' }}>
        <div className='d-flex'>
            <Row>
                <Col>
                    <Row>
                    <span style={{fontSize:'0.8rem'}}>STEP 1 : </span>
                    <h6 style={{fontWeight:'bolder', marginTop:'7px'}}>
                        Sign up
                    </h6>
                    <span>Register and agree to our legal terms & conditions</span>
                    </Row>
                    <Row style={{marginTop:'30px'}}>
                    <span style={{fontSize:'0.8rem'}}>STEP 2 : </span>
                    <h6 style={{fontWeight:'bolder', marginTop:'7px'}}>
                        Describe your use case and select APIs
                    </h6>
                    <span>Once submitted, we will review your request and reach <br /> out within 48 hours</span>
                    </Row>
                    <Row style={{marginTop:'30px'}}>
                    <span style={{fontSize:'0.8rem'}}>STEP 3 : </span>
                    <h6 style={{fontWeight:'bolder', marginTop:'7px'}}>
                        Start developing!
                    </h6>
                    <span>Once your request is approved, access our API <br /> documentation to begin your work</span>
                    </Row>
                </Col>
                <Col>
                    <img src={login} width='500px' style={{opacity:'0.7'}} alt='/'></img>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Page5
