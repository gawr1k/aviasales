const initialState = {
  tickets: [],
  error: null,
  loading: true,
}

const dataReducer = (state = initialState, action = undefined) => {
  switch (action.type) {
    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.allTickets],
      }

    case 'GET_DATA_FAILURE':
      return {
        ...state,
        error: action.payload.error,
      }

    case 'RESET_ERROR':
      return {
        ...state,
        error: null,
      }

    default:
      return state
  }
}

export default dataReducer
