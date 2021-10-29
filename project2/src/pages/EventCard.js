import { Link } from 'react-router-dom'

const EventCard = ({ id, datetime_utc, title, performers, image, venue }) => {
  let time = datetime_utc.slice(11)
  let date = datetime_utc.slice(0, 10)
  let fullDate = `${time} ${date}`

  return (
    <div className="event">
      <div className="text">
        <h2>
          <Link className="link" to={`/events/${id}`}>
            {' '}
            {performers[0].name}
          </Link>
        </h2>
        <p> {fullDate} </p>
        <p>
          {' '}
          {venue.city}, {venue.country}
        </p>
      </div>
      <div className="image">
        <picture>
          <img src={performers[0].image} alt={performers.name} />
        </picture>
      </div>
    </div>
  )
}

export default EventCard
