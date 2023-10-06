import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Page4 = () => {
  return (
    <div style={{ marginTop: "150px", marginLeft: "200px", marginBottom: '150px', marginRight:'200px' }}>
        <div className='d-flex' style={{backgroundColor:'#F8F8FF', padding:'80px 50px 80px 50px'}}>
            <Row>
                <h1 style={{fontWeight:'bold'}}>Stop building from <br /> scratch!</h1>
                <span style={{fontSize: '20px'}}> 
                    Our developer-friendly APIs are
                    easy to understand,<br />implement & iterate.
                </span>
                <span style={{fontSize: '20px'}}>
                    Build on top of core features such as forms, 
                    shopping <br /> cart, user profile, wishlist & more.
                </span>
            </Row>
            <Row>
                img
            </Row>
        </div>
    </div>
  )
}

export default Page4
