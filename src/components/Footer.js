import React from 'react'
import logo from '../images/mestlogo_white.png'

function Footer() {
    return (
      
    <footer className='navbar navbar-expand-lg navbar-light bg-info'>
            <a className="navbar-brand" href="">
                    <img src={logo} alt="Mest Logo" width="100" height="20" loading='lazy'/>
            </a>
            
     <div className='social-media-icons'>
            <p>Social media icons will be displayed here</p>
     </div>
     <div className='others'>
            <p>All rights reserved</p>
     </div>
    </footer>
   
   
    )
}

export default Footer
