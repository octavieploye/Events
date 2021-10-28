import { useState, useEffect } from 'react'
import { fetchEvents } from '../helpers/Api'
import EventCard from '../pages/EventCard'

const Filter = () => {
  const [events, setEvents] = useState([])
  const [q, setQ] = useState('')
  const [searchParam] = useState(['type', 'short_title', 'performers.name'])
  const [filterParam, setFilterParam] = useState(['All'])

  useEffect(() => {
    fetchEvents().then(setEvents)
  }, [])

  function search(events) {
    return events.filter((event) => {
      if (event.type === filterParam && events.length > 0) {
        return searchParam.some((newEvent) => {
          return (
            event[newEvent].toString().toLowerCase().indexOf(q.toLowerCase()) >
            -1
          )
        })
      } else if (filterParam === 'all' && events.length > 0) {
        return searchParam.some((newEvent) => {
          return (
            event[newEvent].toString().toLowerCase().indexOf(q.toLowerCase()) >
            -1
          )
        })
      } else {
        return
      }
    })
  }
  const buttonChange = (event) => {
    setFilterParam(event.target.value)
  }
  return (
    <>
      <button value="all" onClick={buttonChange}>
        All Events
      </button>
      <button value="theatre" onClick={buttonChange}>
        Theatre
      </button>
      <button value="family" onClick={buttonChange}>
        Family
      </button>
      <button value="concert" onClick={buttonChange}>
        Concert
      </button>
      <button value="broadway_tickets_national" onClick={buttonChange}>
        Brodway
      </button>
      <button value="mls" onClick={buttonChange}>
        MLS
      </button>
      <button value="ncaa_basketball" onClick={buttonChange}>
        Basketball
      </button>

      <section>
        <ul>
          {search(events).map((event) => (
            <li key={event.id}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Filter
