const initialState = {
  tickets: [],
  loading: true,
  errorMessage: null,
}

const dataReducer = (state = initialState, action = undefined) => {
  switch (action.type) {
    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.allTickets],
      }
    case 'RESET_LOADING':
      return {
        ...state,
        loading: false,
      }
    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }
    default:
      return state
  }
}

export default dataReducer
