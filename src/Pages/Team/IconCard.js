import React from 'react';
import './Iconcard.css'

const IconCard = ({ icon }) => {
    return (
        <div className='bg-white p-2'>
            <span className='text-blue-700 text-xl social-icon cursor-pointer'>{icon}</span>
        </div>
    );
};

export default IconCard;