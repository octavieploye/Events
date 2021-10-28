import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import EventShow from './components/EventShow'
import EventList from './pages/EventList'
import Filter from './pages/Filter'

function App() {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<main>
						<Switch>
							<Route path='/events/:id' component={EventShow} />
							<Route path='/events' component={EventList} />
							<Route path='/'>
								<Filter />
							</Route>
						</Switch>
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
		</Router>
	)
}

export default App
