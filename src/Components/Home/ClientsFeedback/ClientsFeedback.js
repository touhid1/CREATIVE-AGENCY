import React, { useState } from 'react';
import './ClientsFeedback.css';
import Client from './Client';
import { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const ClientsFeedback = () => {
    const [clients, setClients] = useState([]);
    useEffect(() =>{
        fetch(`https://creativemmhkagency30313.herokuapp.com/clientComments`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setClients(data);
        })
    },[])
    return (
        <section className=''>
            <h3 className='my-5 w-50 text-center mx-auto feedback'>Clients <span style={{color: '#7AB259'}}>Feedback</span></h3>
            <div className="row my-5 justify-content-center">
                {
                    !clients.length && <div className='text-center'>
                            <CircularProgress color="secondary" /> 
                            <h2 style={{color: '#DC004E', }}>loading....</h2>
                        </div>
                }
                {
                    clients.map((client) => <Client key={client._id} client={client}/>)
                }
            </div>
        </section>
    );
};

export default ClientsFeedback;