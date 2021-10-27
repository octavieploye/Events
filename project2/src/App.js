import './App.css'
import EventList from './pages/EventList'
import Filter from './pages/Filter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <EventList />
          <Filter />
        </>
      </header>
    </div>
  )
}

export default App
