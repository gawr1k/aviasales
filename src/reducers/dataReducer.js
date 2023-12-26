const initialState = {
  tickets: [],
  loading: true,
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

    default:
      return state
  }
}

export default dataReducer
