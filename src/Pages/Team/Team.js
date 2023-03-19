import React, { useEffect, useState } from 'react';
import './teambody.css'
import { FaFacebookF, FaTumblr } from "react-icons/fa";
import { BsVimeo, BsArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import IconCard from './IconCard';

const Team = () => {
    const icons = [
        <FaFacebookF />, <AiOutlineTwitter />, <FaTumblr />, <BsVimeo />,
    ]

    return (
        <div>
            <p className='text-center text-2xl text-blue-600 font-bold my-5'>OUR TEAM MEMBAR</p>
            <h1 className='text-5xl font-bold text-center'>More than 23+ years we provide <br />
                IT solutions</h1>
            <p className='text-center text-xl my-5'>We are privileged to work with hundreds of future-thinking businesses, includin brands.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-2 my-10'>
                <div className='mb-[70px] mx-3 lg:mx-auto team-parant'>
                    <div className='h-[100%] w-[100%] relative overflow-hidden'>
                        <div className='h-full w-full top-0 right-[-100%] absolute team-body rounded-xl'>

                        </div>
                        <img className='w-full' src="https://demo.themexbd.com/wpt/techit/wp-content/uploads/2020/07/t1.jpg" alt="" />
                        <div className='h-full w-full top-[-100%] right-0 absolute flex  items-end flex-col mr-5 mt-5 team-icon'>
                            {
                                icons.map(icon => <IconCard icon={icon}></IconCard>)
                            }
                        </div>
                    </div>
                    <div className='ml-[40px] lg:ml-[20px] mt-[-50px] rounded-md  shadow-lg absolute flex justif-between items-center bg-white py-2 lg:px-10 px-[60px] member-details'>
                        <div className=''>
                            <h1 className='text-2xl font-bold'>Christina Torres</h1>
                            <p className='text-lg'>Company Manager</p>
                        </div>
                        <button className='p-1 rounded-full  ml-10 text-3xl text-blue-500 flex justify-center items-center arrow-icon'><BsArrowRightCircleFill className=''></BsArrowRightCircleFill></button>
                    </div>
                </div>

                <div className='mb-[70px] mx-3 lg:mx-auto team-parant'>
                    <div className='h-[100%] w-[100%] relative overflow-hidden'>
                        <div className='h-full w-full top-0 right-[-100%] absolute team-body rounded-xl'>

                        </div>
                        <img className='w-full' src="https://demo.themexbd.com/wpt/techit/wp-content/uploads/2020/07/t2.jpg" alt="" />
                        <div className='h-full w-full top-[-100%] right-0 absolute flex  items-end flex-col mr-5 mt-5 team-icon'>
                            {
                                icons.map(icon => <IconCard icon={icon}></IconCard>)
                            }
                        </div>
                    </div>
                    <div className='ml-[40px] lg:ml-[20px] mt-[-50px] rounded-md  shadow-lg absolute flex justif-between items-center bg-white py-2 lg:px-10 px-[60px] member-details'>
                        <div className=''>
                            <h1 className='text-2xl font-bold'>Jeanet Kingston</h1>
                            <p className='text-lg'>CEO & Funder</p>
                        </div>
                        <button className='p-1 rounded-full  ml-10 text-3xl text-blue-500 flex justify-center items-center arrow-icon'><BsArrowRightCircleFill className=''></BsArrowRightCircleFill></button>
                    </div>
                </div>
                <div className='mb-[70px] mx-3 lg:mx-auto team-parant'>
                    <div className='h-[100%] w-[100%] relative overflow-hidden'>
                        <div className='h-full w-full top-0 right-[-100%] absolute team-body rounded-xl'>

                        </div>
                        <img className='w-full' src="https://demo.themexbd.com/wpt/techit/wp-content/uploads/2020/07/t3.jpg" alt="" />
                        <div className='h-full w-full top-[-100%] right-0 absolute flex  items-end flex-col mr-5 mt-5 team-icon'>
                            {
                                icons.map(icon => <IconCard icon={icon}></IconCard>)
                            }
                        </div>
                    </div>
                    <div className='ml-[40px] lg:ml-[20px] mt-[-50px] rounded-md  shadow-lg absolute flex justif-between items-center bg-white py-2 lg:px-10 px-[60px] member-details'>
                        <div className=''>
                            <h1 className='text-2xl font-bold'>Robert Cooper</h1>
                            <p className='text-lg'>Web Designer</p>
                        </div>
                        <button className='p-1 rounded-full  ml-10 text-3xl text-blue-500 flex justify-center items-center arrow-icon'><BsArrowRightCircleFill className=''></BsArrowRightCircleFill></button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Team;