import { Link } from 'react-router-dom'
import EventList from './EventList'
import '../styles/eventinfo.css'

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
        <button className="home">
          <Link to="/">Home</Link>
        </button>
      </div>
      <div className="eventInfo">
        <picture>
          <img src={performers[0].image} alt={performers.name} />
        </picture>
        <div className="gigInfo">
          <h2>{performers[0].name}</h2>
          <p>
            {' '}
            {venue.name} {venue.extended_address}
          </p>

          <p> {fullDate} </p>

          <Link className="buyTicketsButton" to={venue.url}>
            Click here for tickets
          </Link>
        </div>
      </div>
    </>
  )
}

export default EventInfo
