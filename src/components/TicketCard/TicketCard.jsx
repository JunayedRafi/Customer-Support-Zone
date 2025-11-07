import React from 'react';
import { IoCalendar } from 'react-icons/io5';

const TicketCard = ({ticketData}) => {
    return (
            <div className="p-4 bg-white rounded-lg shadow-lg-300 flex flex-col justify-between">
                <div className='flex justify-between items-center'>
                <h4 className="text-lg text-[#001931]">{ticketData.title}</h4>
                <div className="flex items-center space-x-2 bg-green-100 rounded-full py-2 px-4 w-fit">
                    <div className="w-3 h-3 bg-green-800 rounded-full"></div>                
                    <span className="text-green-800 font-semibold">{ticketData.status}</span>
                </div>
                </div>
                <p className="text-base text-[#627382] my-3">{ticketData.description}</p>
                <div className="flex justify-between">
                <div className="align-center flex gap-3 w-[50%]">
                    <h4 className="text-base text-[#627382]">#1001</h4>
                    <h4 className="text-base text-[#F83044] uppercase">#{ticketData.priority}</h4>
                </div>
                <div className="align-center flex gap-3 w-[50%] justify-end">
                    <h4 className="text-base text-[#627382]">{ticketData.customer}</h4>
                    <div className="flex">
                    <IoCalendar color="#627382" size={23} />
                    <span className="text-base text-[#627382] ml-1">{ticketData.date}</span>
                    </div>
                </div>
                </div>
            </div>
    );
};

export default TicketCard;