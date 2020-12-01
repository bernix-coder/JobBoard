import React from 'react'
import '../styles/Navbar.css'

function Filter() {
    return (


        <div class="accordion" id="accordionExample">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <h4 class=" btn btn-block text-left" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Type of Employment
                        </h4>
                    </h2>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body bg-light ">
                        <ul className=''>

                            <li style={{ display: "flex" }} className='p-2 joincss'>
                                <input type='checkbox' className='mr-3' />
                                <h6 className='mr-5 pt-2 pr-1'>Full Time</h6>
                                <span className='bg-info'>60</span>
                            </li>

                            <li style={{ display: "flex" }} className='p-2 joincss'>
                                <input type='checkbox' className='mr-3' />
                                <h6 className='mr-5 pt-2'>Part Time</h6>
                                <span className='bg-info'>20</span>
                            </li>

                            <li style={{ display: "flex" }} className='p-2 joincss'>
                                <input type='checkbox' className='mr-3' />
                                <h6 className='mr-5 pt-2 pr-3'>   Remote</h6>
                                <span className='bg-info'>18</span>
                            </li>

                            <li style={{ display: "flex" }} className='p-2 joincss'>
                                <input type='checkbox' className='mr-3' />
                                <h6 className='mr-5 pt-2'>Internship</h6>
                                <span className='bg-info'>19</span>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>


            <div class="card">
                <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                        <h3 class="btn  btn-block text-left" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Category
        </h3>
                    </h2>
                </div>

                <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="card-body bg-light ">
                        <ul>

                            <li style={{ display: "flex" }} className='p-2 joincss'>
                                <input type='checkbox' className='mr-3' />
                                <h6 className='mr-4 pt-2 pr-1'>Programming</h6>
                                <span className='bg-info'>60</span>
                            </li>

                            <li style={{ display: "flex" }} className='p-2 joincss'>
                                <input type='checkbox' className='mr-3' />
                                <h6 className='mr-5 pr-1 pt-2'>Marketing</h6>
                                <span className='bg-info'>20</span>
                            </li>

                            <li style={{ display: "flex" }} className='p-2 joincss'>
                                <input type='checkbox' className='mr-3' />
                                <h6 className='mr-5 pt-2 pr-4 pl-2'>   Others</h6>
                                <span className='bg-info'>18</span>
                            </li>



                        </ul>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default Filter
