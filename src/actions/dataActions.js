import AviasalesTicketFetcher from '../api/api'
import notificationService from '../components/Allert/notificationService'

const api = new AviasalesTicketFetcher()

const getDataSuccess = (allTickets) => ({
  type: 'GET_DATA_SUCCESS',
  payload: {
    allTickets,
  },
})

export const resetLoading = () => ({
  type: 'RESET_LOADING',
})

const fetchData = () => async (dispatch) => {
  try {
    const searchId = await api.getSearchId()

    if (!searchId) {
      notificationService.showErrorMessage('Server error')
      return
    }

    let tickets
    do {
      try {
        tickets = await api.getTickets(searchId)
        if (tickets) {
          dispatch(getDataSuccess(tickets.tickets))
        }
      } catch (error) {
        notificationService.showErrorMessage(`${error.message}`)
      }
    } while (!tickets.stop)
    dispatch(resetLoading(false))
  } catch (error) {
    notificationService.showErrorMessage(`${error.message}`)
  }
}

export default fetchData
