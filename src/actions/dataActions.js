import AviasalesTicketFetcher from '../api/api'

const aviasalesAPI = new AviasalesTicketFetcher()

const getDataSuccess = (allTickets) => ({
  type: 'GET_DATA_SUCCESS',
  payload: {
    allTickets,
  },
})

const fetchData = () => async (dispatch) => {
  try {
    const searchId = await aviasalesAPI.getSearchId()
    if (!searchId) {
      console.log('Failed to get searchId. No searchId returned.')
      return
    }
    let tickets
    do {
      try {
        tickets = await aviasalesAPI.getTickets(searchId)

        if (tickets) {
          dispatch(getDataSuccess(tickets.tickets))
        } else {
          console.log('Failed to get tickets. No tickets returned.')
        }
      } catch (error) {
        console.error('Error while getting tickets:', error)
      }
      console.log(!tickets.stop)
    } while (!tickets.stop)
  } catch (error) {
    console.error('Failed to fetch data:', error)
  }
}

export default fetchData
