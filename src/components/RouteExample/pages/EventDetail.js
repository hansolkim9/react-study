import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EventDetail = () => {

    const { eventId } = useParams();

    const data = useLoaderData();
    console.log('loader data: ', data);

    return (
        <>
            <h1>EventDetail Page</h1>
            <p>Event Id: {eventId}</p>
        </>
    );
};

export default EventDetail;
