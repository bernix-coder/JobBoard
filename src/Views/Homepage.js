import React from 'react'

import Filter from "../components/Filter"
import Lists from "../data/jobcarddata.json"
import Card from '../components/Card'

function Homepage() {

    let styling = {
        flexWrap: "wrap",
        justifyContent:"flex-start"
    }
    return (
        <div className='container ' style={{minHeight:"100vh"}} >
           
            <div className='row'>
                <div className='col-3'>
                    <Filter />
                </div>

                <div className='col-9'>
                    <div className='d-flex ' style={styling}>
                        {
                            Lists.map((card, index) => (
                                <Card card={card} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
