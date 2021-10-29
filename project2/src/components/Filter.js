import { useState, useEffect } from 'react'
import { fetchEvents } from '../helpers/Api'
import EventCard from '../pages/EventCard'
import '../styles/filter.css'

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
      if (event.type === filterParam) {
        return searchParam.some((newEvent) => {
          return (
            event[newEvent].toString().toLowerCase().indexOf(q.toLowerCase()) >
            -1
          )
        })
      } else if (filterParam === 'all') {
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
      <div className="buttonWrap">
        <button className="nav" value="all" onClick={buttonChange}>
          All Events
        </button>
        <button className="nav" value="theatre" onClick={buttonChange}>
          Theatre
        </button>
        <button className="nav" value="family" onClick={buttonChange}>
          Family
        </button>
        <button className="nav" value="concert" onClick={buttonChange}>
          Concert
        </button>
        <button
          className="nav"
          value="broadway_tickets_national"
          onClick={buttonChange}
        >
          Brodway
        </button>
        <button className="nav" value="mls" onClick={buttonChange}>
          MLS
        </button>
        <button className="nav" value="ncaa_basketball" onClick={buttonChange}>
          Basketball
        </button>
      </div>
      <section>
        {search(events).length !== 0 ? (
          search(events).map((event) => (
            <ul>
              <li key={event.id}>
                <EventCard {...event} />
              </li>
            </ul>
          ))
        ) : (
          <div>
            <p className="filterWarning">
              There are no events under your selected category. See other events
              below.
            </p>
          </div>
        )}
      </section>
    </>
  )
}

export default Filter
