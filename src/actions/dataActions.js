import AviasalesTicketFetcher from '../api/api'

const aviasalesAPI = new AviasalesTicketFetcher()

const getDataSuccess = (allTickets) => ({
  type: 'GET_DATA_SUCCESS',
  payload: {
    allTickets,
  },
})

const getDataFailure = (error) => ({
  type: 'GET_DATA_FAILURE',
  payload: {
    error,
  },
})

export const resetError = () => ({
  type: 'RESET_ERROR',
})

const fetchData = () => async (dispatch) => {
  try {
    const searchId = await aviasalesAPI.getSearchId()

    if (!searchId) {
      dispatch(getDataFailure('Failed to get searchId. No searchId returned.'))
      return
    }

    let tickets
    do {
      try {
        tickets = await aviasalesAPI.getTickets(searchId)
        if (tickets) {
          dispatch(getDataSuccess(tickets.tickets))
        }
      } catch (error) {
        dispatch(getDataFailure(error))
      }
    } while (!tickets.stop)
  } catch (error) {
    dispatch(getDataFailure(error))
  }
}

export default fetchData
