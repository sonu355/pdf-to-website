import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const logo = require('../assets/newlogo.png')
const Page6 = () => {
  return (
    <div style={{ marginTop: "150px", marginLeft: "200px", marginBottom: '150px', marginRight:'200px' }}>
        <div className='d-flex' style={{backgroundColor:'black', padding:'30px 25px 30px 25px'}}>
            <Row>
                
                <h1 style={{fontWeight:'bold', color:'white'}}>Submit your app</h1>
                <span style={{fontSize: '16px', color:'white'}}> 
                    Expand your app’s reach. Add it to our marketplace <br />
                    for the XIRCLS brand community to discover.<br />
                </span>
                <div style={{marginTop:'20px'}}>
                    <button style={{padding:'10px 0 10px  0', width:'160px', fontWeight:'bold', border:'none'}}>Submit an App</button>
                    <button style={{background:'none', color:'white', padding:'9px 10px 9px 10px', marginLeft:'20px'}}>Explore marketplace</button>
                </div>
                <span style={{marginTop:'20px', color:'white'}}>
                    <a href='/' style={{color:'white'}}>Sign up</a>
                    &nbsp;for a early access to new developer products.
                </span>
            </Row>
            <Row>
                <img src={logo} style={{ width:'500px', marginRight:'130px'}}></img>
            </Row>
        </div>
    </div>
  )
}

export default Page6
