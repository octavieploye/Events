import { Link } from 'react-router-dom'
import EventList from './EventList'

const EventInfo = ({
  id,
  datetime_utc,
  url,
  title,
  venue,
  performers,
  image,
}) => {
  let time = datetime_utc.slice(11)
  let date = datetime_utc.slice(0, 10)
  let fullDate = `${time} ${date}`

  return (
    <>
      <div>
        <Link to="/events">Click here to see all events</Link>
      </div>
      <div className="event">
        <h2>{performers[0].name}</h2>
        <p>
          {' '}
          {venue.name} {venue.extended_address}
        </p>

        <p> {fullDate} </p>

        <p>
          <Link to={venue.url}>Click here for tickets</Link>
        </p>
        <picture>
          <img src={performers[0].image} alt={performers.name} />
        </picture>
      </div>
    </>
  )
}

export default EventInfo
