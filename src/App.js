import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom"
import About from "./component/About";
import Blogs from "./component/Blogs";
import Contract from "./component/Contract";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

import Blog from "./component/Blog";
import Error from "./component/Error";

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
    
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="blogs/:course" element={<Blog/>}/>
      <Route path="/contract" element={<Contract/>}/>
      <Route path="*" element={<Error/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
