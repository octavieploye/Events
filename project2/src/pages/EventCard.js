
const EventCard = ({ id, type, venue, performers }) => {
    return (
      <div className='event'>
        <h2>
          {performers.type} ({type})
        </h2>
        <p> {venue.name} {venue.extended_address}</p>
        {/* <picture>
          <img src={image} alt={name} />
        </picture> */}
      </div>
    )
  }

  export default EventCard