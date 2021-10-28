import axios from 'axios'

const baseUrl = 'https://api.seatgeek.com/2/events'

const clientId = '?client_id=MjQxMDIzMzB8MTYzNTE4MTAzMS45MjkxODU0'

export const fetchEvents = async () => {
  const config = {
    method: 'get',
    url: `${baseUrl}${clientId}`,
    headers: {},
  }

  const response = await axios(config)
  return response.data.events
}

export const fetchEvent = async (id) => {
  const config = {
    method: 'get',
    url: `${baseUrl}/${id}${clientId}`,
    headers: {},
  }

  const response = await axios(config)
  return response.data
}
