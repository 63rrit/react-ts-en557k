import React from "react";
import { useParams } from 'react-router-dom';
import { PageWrapper } from "../components/Shared/Shared";
import DATA from "../DATA";


const EventDetails = () => {
    const params = useParams();
    const { eventsData } = DATA;


    const event = eventsData.find((event) => event.id === params.eventId)

    if(!event) {
        return <p>Event not found</p>
    } 

    return (
        <PageWrapper
            title={ `${ event.title }` }  
            description= { event.description }
        >
            <h1>{ event.date }</h1>
            <p>{ event.boats }</p>

            {/* <Route path={`/quotes/${ params.eventId }/photos`} element={<Rates/>} /> */}
        </PageWrapper>
    )
}


export default EventDetails;