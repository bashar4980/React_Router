import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg bg-light'>
                <ul className='navbar-nav mx-auto'>
                <li  className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
                <li  className='nav-item'><Link className='nav-link' to="/about">About</Link></li>
                <li  className='nav-item'><Link className='nav-link' to="/blogs">Blogs</Link></li>
                <li  className='nav-item'><Link className='nav-link' to="/contract">Contract</Link></li>
                
                </ul>
            </nav>

        </div>
    )
}

export default Navbar