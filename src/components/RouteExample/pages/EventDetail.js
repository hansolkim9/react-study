import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {

    const { eventId } = useParams();

    return (
        <>
            <h1>EventDetail Page</h1>
            <p>Event Id: {eventId}</p>
        </>
    );
};

export default EventDetail;
