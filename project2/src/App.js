import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import EventShow from './components/EventShow'
import Filter from './components/Filter'
import Search from './components/Search'
import EventList from './pages/EventList'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <main>
            <Switch>
              <Route path="/events/:id" component={EventShow} />
              <Route path="/events" component={EventList} />
              <Route path="/">
                <Search />
                <Filter />
                <EventList />
              </Route>
            </Switch>
          </main>
          <></>
        </header>
      </div>
    </Router>
  )
}

export default App
