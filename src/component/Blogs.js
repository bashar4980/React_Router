import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BlogData } from './blogData'

const Blogs = () => {
  const [blogData, setBlogdata] = useState(BlogData);

  return (
    <div className='container my-5'>
      <div className='row'>

        {blogData.map((blog , id) => {
          return (
            <div className="card col-lg-3" key={id}>
              <img src={blog.courseImg} className="img-fluid h-50" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text text-muted">{blog.author}</p>
               <h5 className="card-subtitle text-muted">Course</h5>
               <Link to={blog.course}>Learn More</Link>
              </div>
            </div>
          )
        })}

      </div>
      
    </div>


  )
}

export default Blogs