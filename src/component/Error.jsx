import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div  style={{height:"100vh"}} className=" container bg-danger">
       <center>
       <h1 className='bg-danger pt-5 display-1'>Page Not Found...</h1>
        <Link to="/">Go to Home</Link>
       </center>
    </div>
  )
}

export default Error