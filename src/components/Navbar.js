import React from 'react'
import logo from '../images/mestlogo_white.png'
import '../styles/Navbar.css'

function Navbar() {
    return (

      
    <nav className='navbar navbar-expand-lg navbar-light bg-info sticky-top'>
    
            <a className="navbar-brand" href="">
                <img src={logo} alt="Mest Logo" width="100" height="20" loading='lazy'/>
            </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target='#navbarContent'>
        <span className="navbar-toggler-icon"></span>
        </button>
     
        <div className='col-9'>

        </div>
 
        
            <div className="collapse navbar-collapse ml-3   " id='navbarContent'>
            <ul className="navbar-nav ">
                <li className="nav-item dropdown  ">
                    <a className=" nav-link dropdown-toggle  " role='button' data-toggle='dropdown'  >
                        Jobs
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item">Candidates</a>
                    </div>
                </li>
            </ul>
     </div>
       
</nav>
   
    
    )
}

export default Navbar
