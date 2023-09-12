import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>
    {
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    })
    return (
        <div>
            <div className='text-center mb-4 '>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our service area</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti pariatur <br /> ducimus debitis sit commodi nisi.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4'>
                {
                    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='text-center my-4'>
                 <button className="btn btn-outline btn-warning">See More</button>
            </div>
        </div>
    );
};

export default Services;