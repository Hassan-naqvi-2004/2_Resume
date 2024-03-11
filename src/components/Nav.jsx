import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";


function Nav() {
  return (
    <>
      <div className="text">
       <Link to='/'style={{color:'white'}}><h1>My Resume</h1></Link>
       <div className='text1'>
        <Link  to='/About' style={{color:'white'}}><p> <FaHome /> Home</p></Link>
        <Link to='/Skills'style={{color:'white'}}> <p>Skills</p></Link>
        <p> Experience</p>
        <p><FaGraduationCap />Education</p>
     
        </div>
      </div>
    </>
  )
}

export default Nav
