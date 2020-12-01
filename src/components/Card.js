import React from 'react'
import logo from '../images/kpmg.png'

function Card({ card }) {
    return (
        <div className='card mt-2 mr-2 ' style={{ width: "12rem" }}>
            <div className='card-body'>
                {/* <img src={logo} className='card-img mb-3' width='10' height='10' />   */}
                <h5 className='card-title'>{card.jobType}</h5>
                <p className='card-text'>{card.briefDetail}</p>
                <div>
                    <span className='bg-light p-1 mr-1'>Full Time</span>
                    <span className='bg-light p-1 mr-1'>Mid Level</span>
                    <span className='bg-light p-1 mr-1'>20-08-2020</span>
                </div>
            </div>
        </div>
    )
}

export default Card
