import React from 'react'
import logo from '../images/dark.png'
import {Link} from "react-router-dom"

function Navbar() {

    let imgStyle={
        width:"100px",
        height:"20px",
     

    }
    return (

      
    <nav className='navbar navbar-expand-lg navbar-light bg-white sticky-top'>
    
        <div className='container'>
        <Link to="" className="navbar-brand" >
                <img src={logo} alt="Mest Logo" style={imgStyle} loading='lazy'/>
            </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target='#navbarContent'>
        <span className="navbar-toggler-icon"></span>
        </button>
     
        <div className='col-9'>

        </div>
 
        
            <div className="collapse navbar-collapse ml-3  " id='navbarContent'>
            <ul className="navbar-nav ">
               {
                   /**
                    <li className='nav-item'>
                    <Link to="/" className='nav-link active' role='button'>
                        Jobs
                    </Link>
                </li> 
                     
                     **/
               }
                <li className="nav-item dropdown  ">
                    <Link to='/' className=" nav-link active dropdown-toggle  " role='button' data-toggle='dropdown'  >
                     Jobs
                    </Link>
                    <div className="dropdown-menu">
                        <Link to='/candidates' className="dropdown-item">Candidates</Link>
                  
                    </div>
                   
                </li>
            </ul>
     </div>
       
        </div>
</nav>
   
    
    )
}

export default Navbar
