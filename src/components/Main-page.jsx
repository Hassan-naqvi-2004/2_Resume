import React from 'react'
import Card from './Card'
import About from './About'
import Skills from './Skills'

function Main_page() {
  return (
    <div className='maindiv'>
        <div className="flex">
            <div className='card'>
            <Card/>

            </div>
           
            <div>
                <About/>
                <Skills/>
            </div>
        </div>
      
    </div>
  )
}

export default Main_page
