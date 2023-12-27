import countTotalStops from '../components/Card/countTotalStops/countTotalStops'

function ticketSorter(tickets, selectedOption, transfers) {
  if (!tickets) return tickets

  const sortedTickets = [...tickets]

  if (selectedOption === 'cheap') {
    sortedTickets.sort((a, b) => a.price - b.price)
  } else if (selectedOption === 'fast') {
    sortedTickets.sort((a, b) => a.duration - b.duration)
  } else if (selectedOption === 'optimal') {
    sortedTickets.sort((a, b) => {
      if (a.price !== b.price) {
        return a.price - b.price
      }
      return a.duration - b.duration
    })
  }

  return sortedTickets.filter(
    (ticket) =>
      transfers.includes(countTotalStops(ticket)) || transfers.includes('all')
  )
}

export default ticketSorter
