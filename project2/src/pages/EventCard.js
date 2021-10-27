
const EventCard = ({ id, type, venue }) => {
    return (
      <div className='event'>
        <h2>
          {id} ({type})
        </h2>
        <p> {venue.name} {venue.extended_address}</p>
        {/* <picture>
          <img src={image} alt={name} />
        </picture> */}
      </div>
    )
  }

  export default EventCard