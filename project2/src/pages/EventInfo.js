import { Link } from 'react-router-dom'

const EventInfo = ({
  id,
  type,
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
    <div className="event">
      <h2>
        <Link to={`/events/${id}`}>
          {' '}
          {performers.name} {title}
        </Link>
      </h2>
      <p> {type} </p>
      <p>
        {' '}
        {venue.name} {venue.extended_address}
      </p>

      <p> {fullDate} </p>

      <p> {venue.url} </p>
      <picture>
        <img src={performers[0].image} alt={performers.name} />
      </picture>
    </div>
  )
}

export default EventInfo
