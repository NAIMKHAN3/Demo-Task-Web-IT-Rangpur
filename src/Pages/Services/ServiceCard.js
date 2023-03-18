import React from 'react';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineFileSearch } from "react-icons/ai";

const ServiceCard = ({ service }) => {
    return (
        <div className='mx-auto shadow-md bg-white p-7 border'>
            <span>{service.icon}</span>
            <h1 className='text-2xl font-bold'>{service.name}</h1>
            <p className='text-xl my-7'>{service.details}</p>
            <button className='border rounded text-s py-2 px-6 text-blue-700 flex justify-center items-center'>READ MORE <span className='mx-2 text-blue-700'><BsArrowRightCircleFill></BsArrowRightCircleFill></span></button>
        </div>
    );
};

export default ServiceCard;