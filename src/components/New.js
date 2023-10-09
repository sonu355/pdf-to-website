import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const img1 = require('../assets/com5img3.jpg')
const img2 = require('../assets/com5img4.jpg')
const img3 = require('../assets/com6img4.jpeg')
const img4 = require('../assets/com7img5.jpeg')

const New = () => {
  return (
    <div style={{ marginTop: "150px",  marginBottom: '150px', backgroundColor:'black', border:'0.1px solid white'}}>
        <hr style={{marginTop:'30px', color:'white'}}/>
        <div className='d-flex' style={{ borderLeft:'none', borderRight:'none',}}>
            <div style={{margin:'30px 0px 40px 50px', width:'50rem'}}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:'150px'}} width="60" height="60" fill="#CBC3E3" class="bi bi-circle-fill" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8"/>
                </svg>
                <h1 style={{color:'white', marginTop:'10px'}}>Freelance marketplace</h1>
                <h5 style={{color:'white',marginLeft:'70px'}}>from $2.999/mo per rep</h5>
                <button style={{border:'none', margin:'20px 0px 0px 120px', padding:'10px 10px 10px 10px'}}>Chat with us</button>
            </div>
            <div style={{color:'white', margin:'110px 50px 40px 50px'}}>
                <h5>Grow your team by tapping into our freelance marketplace. Reps with <br /> experience in
                    cold and warm outreach will learn about your product to begin connecting with leads on your behalf
                </h5>
                <ul style={{marginTop:'30px'}}>
                    <li>work directly with reps</li>
                    <li>train reps to understand your project</li>
                    <li>get feedback and direction about your campaigns</li>
                    <li>cold calling, email, linkedin outreach etc...</li>
                </ul>
           </div>
        </div>
        <div style={{color:'white', marginLeft:'50px', marginTop:'20px'}}>
            <h1 style={{ fontWeight: 'bolder'}}>Our tech, your growth </h1>
                Monetize the most cutting-edge APIs in marketing
        </div>
        <Row style={{margin:'40px 0px 40px 50px', color:'white'}}>
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
        <Row style={{margin:'40px 0px 40px 50px', paddingBottom:'50px', color:'white'}}>
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
        <hr style={{marginBottom:'30px', color:'white'}}/>
    </div>
  )
}

export default New
