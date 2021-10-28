import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchEvent } from '../helpers/Api'
import EventInfo from '../pages/EventInfo'

function EventShow() {
  const [event, setEvent] = useState()
  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    fetchEvent(id).then((res) => setEvent(res))
  }, [id])
  return (
    <div>
      {event ? (
        <div>
          <h1>{event.type}</h1>
          <p>this is working</p>
          <EventInfo {...event} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default EventShow
