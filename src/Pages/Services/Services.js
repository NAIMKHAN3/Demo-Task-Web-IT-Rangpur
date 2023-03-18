import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { HiOutlineLightBulb, HiOutlineDesktopComputer } from "react-icons/hi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { ImTree } from "react-icons/im";
import { FaRegChartBar } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import './servicecard.css'
import Team from '../Team/Team';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("demotask.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)

    const icons = [
        <AiOutlineFileSearch />,
        <HiOutlineLightBulb />,
        <ImTree />,
        <FaRegChartBar />,
        <MdManageAccounts />,
        <HiOutlineDesktopComputer />]
    return (
        <div>
            <div className='grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-6xl'>
                {
                    services.map((service, i) => <ServiceCard key={service._id} service={service} icon={icons[i]}></ServiceCard>)
                }

            </div>
            <Team></Team>
        </div>
    );
};

export default Services;