import { useState, useEffect } from 'react'
import axios from 'axios'
import EventCard from './EventCard'

const Filter = () => {
	const [events, setEvents] = useState([])
	const [q, setQ] = useState('')
	const [searchParam] = useState(['type', 'id'])
	const [filterParam, setFilterParam] = useState(['All'])

	useEffect(() => {
		async function fetchEvents() {
			const config = {
				method: 'get',
				url: 'https://api.seatgeek.com/2/events?client_id=MjQxMDIzMzB8MTYzNTE4MTAzMS45MjkxODU0',
				headers: {},
			}

			const response = await axios(config)
			setEvents(response.data.events)
			console.log(response)
		}
		fetchEvents()
	}, [])

	function search(events) {
		return events.filter((event) => {
			if (event.type === filterParam) {
				return searchParam.some((newEvent) => {
					return (
						event[newEvent].toString().toLowerCase().indexOf(q.toLowerCase()) >
						-1
					)
				})
			} else if (filterParam === 'All') {
				return searchParam.some((newEvent) => {
					return (
						event[newEvent].toString().toLowerCase().indexOf(q.toLowerCase()) >
						-1
					)
				})
			}
		})
	}
	const buttonChange = (event) => {
		setFilterParam(event.target.value)
	}
	return (
		<>
			<button value='theatre' onClick={buttonChange}>
				Theatre
			</button>
			<button value='family' onClick={buttonChange}>
				Family
			</button>
			<button value='concert' onClick={buttonChange}>
				Concert
			</button>
			<button value='broadway_tickets_national' onClick={buttonChange}>
				Brodway
			</button>
			<button value='mls' onClick={buttonChange}>
				MLS
			</button>
			<button value='ncaa_basketball' onClick={buttonChange}>
				Basketball
			</button>

			<section>
				<ul>
					{search(events).map((event) => (
						<li key={event.id}>
							<EventCard {...event} />
						</li>
					))}
				</ul>
			</section>
		</>
	)
}

export default Filter
