import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const img1 = require('../assets/com5img3.jpg')
const img2 = require('../assets/com5img4.jpg')
const img3 = require('../assets/com6img4.jpeg')
const img4 = require('../assets/com7img5.jpeg')

const Page3 = () => {
  return (
    <div style={{ marginTop: "150px", marginLeft: "200px", marginBottom: '150px', marginRight:'200px' }}>
        <div>
            <h1 style={{ fontWeight: 'bolder'}}>Our tech, your growth </h1>
                Monetize the most cutting-edge APIs in marketing
        </div>
        <Row style={{marginTop:'40px'}}>
            <Col className='d-flex'>
                <div style={{ marginRight:'30px'}}>
                    <img src={img1} alt='/' width='70px'></img>
                </div>
                <div>
                    <h6 style={{ fontWeight:'bold'}}>
                            Easy to integrate
                    </h6>
                    <span>
                        Deeply integrate our APIs into your <br />
                        applications with ease.
                    </span>
                </div>
            </Col>
            <Col className='d-flex'>
            <div style={{ marginRight:'30px'}}>
                    <img src={img2} alt='/' width='70px'></img>
                </div>
                <div>
                    <h6 style={{ fontWeight:'bold'}}>
                        Data privacy first
                    </h6>
                    <span>
                        Our in-built security protocols future-proof <br />
                         you against data theft & ad fraud.
                    </span>
                </div> 
            </Col>
        </Row>
        <Row style={{marginTop:'40px'}}>
            <Col className='d-flex'>
                <div style={{ marginRight:'30px'}}>
                    <img src={img3} alt='/' width='70px'></img>
                </div>
                <div>
                    <h6 style={{ fontWeight:'bold'}}>
                        Open & transparent  
                    </h6>
                    <span>
                        Our open APIs are easily accessible, so <br />
                        you can tailor them to your needs.
                    </span>
                </div>
            </Col>
            <Col className='d-flex'>
            <div style={{ marginRight:'30px'}}>
                    <img src={img4} alt='/' width='70px'></img>
                </div>
                <div>
                    <h6 style={{ fontWeight:'bold'}}>
                        Universal standards
                    </h6>
                    <span>
                        Our tech is built on Django and follows <br />
                        familiar Open API standards.
                    </span>
                </div> 
            </Col>
        </Row>
    </div>
  )
}

export default Page3
