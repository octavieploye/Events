import React, { useState, useEffect } from 'react'
import { fetchEvents } from '../helpers/Api'

const Search = () => {
  const [events, setEvents] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    fetchEvents().then(setEvents)
  }, [])

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = events.filter((event) => {
        return Object.values(event)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    } else {
      setFilteredResults(events)
    }
  }

  return (
    <div className="searchBar">
      <input
        icon="search"
        placeholder="Search Events..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <>
        {searchInput.length > 1 ? (
          filteredResults.map((event) => {
            return (
              <div>
                <div>
                  <p>{event.performers[0].name}</p>
                </div>
              </div>
            )
          })
        ) : (
          <div>
            <p></p>
          </div>
        )}
      </>
    </div>
  )
}

export default Search
