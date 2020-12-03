import React, {useEffect, useState} from 'react'


function ViewMoreDetails(props) {

    const [card, setCard] = useState({})
    useEffect(()=>{
        console.log(props)
        const cardInfo = props.location.state.card
        setCard(cardInfo) 
    },[props.location.state.card])

    return (
        <div>
        <div className='container-fluid bg-light ' /*style={{minHeight:"120vh"}}*/ >
        <div className='container '>
                      
        <div className='row  '>
            <div className='col-sm-12 col-md-12 col-lg-3 mt-5'>
                <img src={card.imgSrc} className='card-img mb-3 w-100' height='150px' alt='' />  
                <div className="row">
                   
                </div>
               
            </div>

            <div className="m-auto"></div>

            <div className='col-sm-12 col-md-12 col-lg-8 mt-5 mb-5'>
                
                    <div class="row">
                    
                     <h2>{props.location.state.card.fullDetails.jobSum}</h2>
                  <p></p>
                    </div>
            </div>
        </div>
    
        </div>
 </div> 
        </div>
    )
}

export default ViewMoreDetails
