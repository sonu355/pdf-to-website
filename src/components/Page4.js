import React from 'react'
import Row from "react-bootstrap/Row";

const code = require('../assets/code.png')
const Page4 = () => {
  return (
    <div style={{ marginTop: "150px", marginLeft: "200px", marginBottom: '150px', marginRight:'200px' }}>
        <div className='d-flex' style={{backgroundColor:'#F8F8FF', padding:'80px 50px 80px 50px'}}>
            <Row>
                <h1 style={{fontWeight:'bold'}}>Stop building from <br /> scratch!</h1>
                <span style={{fontSize: '16px'}}> 
                    Our developer-friendly APIs are
                    easy to understand,<br />implement & iterate.
                </span>
                <span style={{fontSize: '16px'}}>
                    Build on top of core features such as forms, 
                    shopping <br /> cart, user profile, wishlist & more.
                </span>
                <button style={{width:'250px', margin:'20px 0 0 12px', border:'0.1px solid'}}>Get Started</button>
            </Row>
            <Row>
                <img src={code} alt='/'></img>
            </Row>
        </div>
    </div>
  )
}

export default Page4
