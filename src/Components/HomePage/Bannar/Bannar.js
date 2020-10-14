import React from 'react'
import bannar from '../../../images/logos/Frame.png'


const Bannar = () => {
    return (
        <div className="container">
            <div className="row h-100">
                <div className="col-md-6 col-sm-12">
                    <h1 className='font-weight-bolder display-4 mt-4'>Let’s Grow Your<br/>
                        Brand To The<br/>
                        Next Level</h1>

                        <p className='w-75 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        <button className='btn btn-dark text-light px-5'>HIRE US</button>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src={bannar} className='img-fluid' alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Bannar;