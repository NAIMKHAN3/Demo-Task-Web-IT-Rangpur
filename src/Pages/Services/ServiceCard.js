import React from 'react';
import { BsArrowRightCircleFill } from "react-icons/bs";

const ServiceCard = ({ service, icon }) => {

    return (
        <div className='mx-3 lg:mx-auto shadow-md bg-white p-7 border service-card '>
            <div className='flex justify-center md:justify-start'>
                <span className='text-6xl my-5 text-blue-500 text-center service-icon'>{icon}</span>
            </div>
            <h1 className='text-2xl font-bold my-4'>Automated Software</h1>
            <p className='text-xl mb-7'>It is a long stablished fact that are will be distracted by the readabl ent of a page when looking.</p>
            <button className='border rounded text-s py-2 px-6 mb-5 text-blue-700 flex justify-center items-center service-btn'>READ MORE <span className='mx-2 text-blue-700 service-btn-icon'><BsArrowRightCircleFill></BsArrowRightCircleFill></span></button>
        </div>
    );
};

export default ServiceCard;