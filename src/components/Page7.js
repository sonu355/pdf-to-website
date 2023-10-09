import React from 'react'

const Page7 = () => {
  return (
    <div style={{ marginTop: "150px", marginLeft: "200px", marginBottom: '150px', marginRight:'200px' }}>
         <div style={{backgroundColor:'#C8C8C8', padding:'30px 25px 30px 25px', borderRadius:'20px'}}>
            <h1 style={{ color:'black', fontWeight:'bolder',fontSize:'80px' }}>
                Start your <br />
                14 day free trial
            </h1>
                <div className='d-flex'>
                    <button style={{backgroundColor:'white',padding:'10px 0 10px 0',margin:'20px 0px 0px 0px ', border:'none', fontWeight:'', width:'200px', color:'black'}}>
                        Speak with our team
                    </button>
                    <button style={{backgroundColor:'black',padding:'10px 0 10px 0',margin:'20px 0px 0px 10px', border:'none', fontWeight:'bold', width:'140px', color:'white'}}>
                        Get started
                    </button>
                </div>
                <div style={{margin:'90px 0px 0px 420px', fontSize:'18px', }}>
                    <button style={{border:'0.5px solid grey', borderRadius:'30px',backgroundColor:'#C8C8C8', marginRight:'10px', fontWeight:'bold'}}>No implementation fees</button>
                    <button style={{border:'0.5px solid grey', borderRadius:'30px', backgroundColor:'#C8C8C8', marginRight:'10px', fontWeight:'bold'}}>No minimums</button>
                    <button style={{border:'0.8px solid gray', borderRadius:'30px',backgroundColor:'#C8C8C8', fontWeight:'bold' }}>All features included</button>
                </div>
        </div>

    </div>
  )
}

export default Page7
