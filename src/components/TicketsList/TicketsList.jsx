import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import './TicketsList.scss'
import ticketSorter from '../../utils/ticketSorter'
import Card from '../Card/Card'
import countTotalStops from '../Card/countTotalStops/countTotalStops'

function TicketsList() {
  const [visible, setVisible] = useState(5)
  const { tickets } = useSelector((state) => state.tickets)
  const { transfers } = useSelector((state) => state.transfers)
  const selectedOption = useSelector(
    (state) => state.selectedOption.selectedOption
  )

  return (
    <>
      {ticketSorter(tickets, selectedOption, transfers)
        .slice(0, visible)
        .map((ticket) => (
          <Card
            countTotalStops={countTotalStops(ticket)}
            key={`${ticket.segments[0].origin}-${ticket.segments[0].destination}-${ticket.segments[0].date}`}
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
    </>
  )
}

export default TicketsList
