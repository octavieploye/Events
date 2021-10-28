import './App.css'
import EventList from './pages/EventList'
import Nav from './components/Nav'
import Filter from './pages/Filter'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Nav />
				<main>
					<EventList />
					{/* In a switch, only the first route that matches is shown. */}

					{/*
              Each of our routes has two props: a 'path' to match,
              and a 'component' to render when we do.
            */}
					{/* <Route path='/events' component={EventList} /> */}
					{/* <Route path='/events/:id' component={EventShow} /> */}
					{/* <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
          
            <Route component={NotFound} /> */}
				</main>
				<></>
			</header>
		</div>
	)
}

export default App
