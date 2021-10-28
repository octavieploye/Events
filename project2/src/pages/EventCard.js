import { Link } from 'react-router-dom'

const EventCard = ({ id, datetime_utc, title, performers, image, venue }) => {
  let time = datetime_utc.slice(11)
  let date = datetime_utc.slice(0, 10)
  let fullDate = `${time} ${date}`

  return (
    <div className="event">
      <h2>
        <Link to={`/events/${id}`}> {performers[0].name}</Link>
      </h2>
      <p> {fullDate} </p>
      <p>
        {' '}
        {venue.city}, {venue.country}
      </p>
      <picture>
        <img src={performers[0].image} alt={performers.name} />
      </picture>
    </div>
  )
}

export default EventCard
