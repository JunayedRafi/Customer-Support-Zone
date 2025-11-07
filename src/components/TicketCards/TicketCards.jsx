import React, { use } from 'react';
import TicketCard from '../TicketCard/TicketCard';

const TicketCards = ({dataPromise}) => {
    const ticketDatas = use(dataPromise)
    console.log(ticketDatas)
    return (
        <div className="grid grid-cols-2 gap-4 ">
            {
                ticketDatas.map(ticketData => <TicketCard ticketData={ticketData}></TicketCard>)
            }
        </div>
    );
};

export default TicketCards;