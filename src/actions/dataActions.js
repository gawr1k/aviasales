import AviasalesTicketFetcher from '../api/api'
import notificationService from '../components/Allert/notificationService'

const api = new AviasalesTicketFetcher()

const getDataSuccess = (allTickets) => ({
  type: 'GET_DATA_SUCCESS',
  payload: { allTickets },
})

const resetLoading = () => ({
  type: 'RESET_LOADING',
})

const setErrorMessage = (errorMessage) => ({
  type: 'SET_ERROR_MESSAGE',
  payload: errorMessage,
})

const fetchData = () => async (dispatch) => {
  const searchId = await api.getSearchId()
  if (!searchId) {
    notificationService.showErrorMessage('Server error')
    return
  }
  let tickets = []
  do {
    try {
      tickets = await api.getTickets(searchId)
      if (tickets === undefined) {
        notificationService.showErrorMessage('Получен пустой ответ от сервера')
        dispatch(setErrorMessage('response. status : 200 data = undefined '))
        break
      }
      dispatch(getDataSuccess(tickets.tickets))
    } catch (error) {
      const statusCode = error.message.match(/\b(\d{3})\b/)[0]
      if (statusCode >= 500) {
        notificationService.showErrorMessage(`${error.message}`)
      } else {
        dispatch(setErrorMessage(`${error.message}`))
        break
      }
    }
  } while (!tickets.stop)
  dispatch(resetLoading(false))
}

export default fetchData
