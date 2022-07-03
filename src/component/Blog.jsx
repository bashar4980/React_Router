import React, { useEffect, useState } from 'react'
import {useParams , Link} from 'react-router-dom';
import { BlogData } from './blogData'


const Blog = () => {
    let { course } = useParams();
    const [blogData, setBlogdata] = useState("");
    useEffect(()=>{
        const blogCourse = BlogData.filter((blog)=> blog.course === course)
        setBlogdata(blogCourse.map((blog,id)=>{
            return(
                
               
                <div className='container-fluid pt-5'>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                        <img src={blog.courseImg} className="img-fluid w-100" alt="..." />
                        </div>
                        <div className="col-lg-6 pt-5">
                        <h4>{blog.title}</h4>
                          <p style={{fontSize:"15px"}} className="text-muted">{blog.author}</p>
                          <button className='btn btn-primary btn-lg' style={{ borderRadius:"0px"}}> Enroll Now</button>
                        </div>
                    </div>
                    <div className="Couese_info pt-5">
                        <h1 className='text-center'>Course Info....</h1>
                        <p style={{fontSize:"20px", textAlign:"justify"}} >
                            {blog.Content.slice(0,500)}
                        </p>
                        <p style={{fontSize:"20px", textAlign:"justify"}} >
                            {blog.Content.slice(500,10000)}
                        </p>
                    </div>
                </div>

                </div>
               
            )
        }))
    }, [])
  return (
    <div>
        <h1>{blogData}</h1>
        
    </div>
  )
}

export default Blog