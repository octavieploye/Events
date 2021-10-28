import { useState, useEffect } from 'react'
import axios from 'axios'
import EventCard from './EventCard'

const EventList = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    async function fetchEvents() {
      const config = {
        method: 'get',
        url: 'https://api.seatgeek.com/2/events?client_id=MjQxMDIzMzB8MTYzNTE4MTAzMS45MjkxODU0',
        headers: {},
      }

      const response = await axios(config)
      setEvents(response.data.events)
      console.log( response )
    }
    fetchEvents()
  }, [])

  return (
    <section>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <EventCard {...event} />
          </li>
        ))}

      
        
      </ul>
    </section>
  )
}

export default EventList