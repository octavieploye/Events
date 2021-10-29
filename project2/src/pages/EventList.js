import { useState, useEffect } from 'react'
import EventCard from './EventCard'
import { fetchEvents } from '../helpers/Api'

const EventList = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetchEvents().then((res) => setEvents(res.slice(0, 4)))
  }, [])

  return (
    <section className="listwrap">
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
