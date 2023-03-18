import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineFileSearch } from "react-icons/ai";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("demotask.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl'>
            {/* {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            } */}
            <div className='mx-auto shadow-md bg-white p-7 border'>
                <span className='text-6xl'><AiOutlineFileSearch></AiOutlineFileSearch></span>
                <h1 className='text-2xl font-bold my-4'>Automated Software</h1>
                <p className='text-xl mb-7'>It is a long stablished fact that are will be distracted by the readabl ent of a page when looking.</p>
                <button className='border rounded text-s py-2 px-6 text-blue-700 flex justify-center items-center'>READ MORE <span className='mx-2 text-blue-700'><BsArrowRightCircleFill></BsArrowRightCircleFill></span></button>
            </div>
        </div>
    );
};

export default Services;