import { useState, useEffect } from 'react'
import axios from 'axios'
import EventCard from './EventCard'

const Filter = () => {
  const [events, setEvents] = useState([])
  const [q, setQ] = useState('')
  const [searchParam] = useState(['type', 'id'])
  const [filterParam, setFilterParam] = useState(['All'])

  useEffect(() => {
    async function fetchEvents() {
      const config = {
        method: 'get',
        url: 'https://api.seatgeek.com/2/events?client_id=MjQxMDIzMzB8MTYzNTE4MTAzMS45MjkxODU0',
        headers: {},
      }

      const response = await axios(config)
      setEvents(response.data.events)
      console.log(response)
    }
    fetchEvents()
  }, [])

  function search(events) {
    return events.filter((event) => {
      if (event.type == filterParam) {
        return searchParam.some((newEvent) => {
          return (
            event[newEvent].toString().toLowerCase().indexOf(q.toLowerCase()) >
            -1
          )
        })
      } else if (filterParam == 'All') {
        return searchParam.some((newEvent) => {
          return (
            event[newEvent].toString().toLowerCase().indexOf(q.toLowerCase()) >
            -1
          )
        })
      }
    })
  }

  return (
    <div className="wrapper">
      <div className="search-wrapper">
        <div className="select">
          <select
            onChange={(e) => {
              setFilterParam(e.target.value)
            }}
            className="custom-select"
            aria-label="Filter Events By Type"
          >
            <option value="theatre">Theatre</option>
            <option value="family">Family</option>
            <option value="concert">Concert</option>
            <option value="broadway_tickets_national">Brodway</option>
            <option value="mls">MLS</option>
            <option value="ncaa_basketball">Basketball</option>
          </select>
          <span className="focus"></span>
        </div>
      </div>

      <section>
        <ul>
          {search(events).map((event) => (
            <li key={event.id}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Filter
