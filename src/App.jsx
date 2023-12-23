import { v4 } from 'uuid'
import './App.scss'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import fetchData from './actions/dataActions'
import Card from './components/Card/Card'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import countTotalStops from './components/Card/countTotalStops/countTotalStops'

function App() {
  const [visible, setVisible] = useState(5)
  const { tickets } = useSelector((state) => state.tickets)
  const { transfers } = useSelector((state) => state.transfers)
  const dispatch = useDispatch()
  const selectedOption = useSelector(
    (state) => state.selectedOption.selectedOption
  )
  const [sortedTickets, setSortedTickets] = useState([])

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  useEffect(() => {
    if (!tickets) return
    const sortedTicketsCopy = [...tickets]
    console.log(tickets)

    if (selectedOption === 'cheap') {
      sortedTicketsCopy.sort((a, b) => a.price - b.price)
    } else if (selectedOption === 'fast') {
      sortedTicketsCopy.sort((a, b) => a.duration - b.duration)
    } else if (selectedOption === 'optimal') {
      sortedTicketsCopy.sort((a, b) => {
        if (a.price !== b.price) {
          return a.price - b.price
        }
        return a.duration - b.duration
      })
    }
    setSortedTickets(sortedTicketsCopy)
  }, [selectedOption, tickets])

  if (!tickets) {
    return null
  }

  return (
    <div className="container">
      <Header />
      <main className="content">
        <Filter />
        <div className="navigation__container">
          <Navigation />
          {sortedTickets &&
            sortedTickets
              .filter((ticket) => {
                const totalStops = countTotalStops(ticket)
                return (
                  transfers.includes(totalStops) || transfers.includes('all')
                )
              })
              .slice(0, visible)
              .map((ticket) => (
                <Card
                  countTotalStops={countTotalStops(ticket)}
                  key={v4()}
                  price={ticket.price}
                  img={ticket.carrier}
                  origin={ticket.segments[0].origin}
                  destination={ticket.segments[0].destination}
                  date={ticket.segments[0].date}
                  duration={ticket.segments[0].duration}
                  backorigin={ticket.segments[1].origin}
                  backdestination={ticket.segments[1].destination}
                  backdate={ticket.segments[1].date}
                  backduration={ticket.segments[1].duration}
                  stops={ticket.segments[0].stops}
                  backstops={ticket.segments[1].stops}
                />
              ))}
          {visible < tickets.length && transfers.length > 0 && (
            <button
              className="card_btn"
              type="button"
              onClick={() => setVisible((v) => v + 5)}
            >
              Показать еще 5 билетов!
            </button>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
