import React from 'react'

const Banner = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-7 pt-5 mt-5">
          <div className="container-text">
            <h1 className='display-4' style={{fontWeight:"bold"}}>Learn without limits</h1>
            <p style={{fontSize:"20px"}} className="my-4">Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
            <button className='btn btn-primary btn-lg' style={{ borderRadius:"0px"}}>Join for Free</button>
            <button className='btn btn-outline-primary btn-lg mx-4' style={{border:"2px solid", borderRadius:"0px"}}>Learn More Earn More...</button>
          </div>
      </div>
      <div className="col-lg-5">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6JVJEaAT8FWwiBfVl1vECY/e4c94d93384ea61e0ec347e1e0605d58/C_Learner_Ehab.png?auto=format%2Ccompress&dpr=1&w=459&h=497&q=40" alt="" />
      </div>
    </div>
  </div>
  
  )
}

export default Banner