import EventBody from '../components/EventBody';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEvent } from '../helpnigFunctions/ApiCaller';

export default function EventPage() {

    const currentEvent = useParams().id;
    const [event, setEvent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getEventData() {
        const data = await getEvent(currentEvent);
        setEvent(data);
        setIsLoading(false);
        }
        getEventData();
    }, []);

    return (
        <div className="container-custom">
            {!isLoading && <EventBody event={event}/>}
        
        </div>
    );
    }