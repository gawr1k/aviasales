const initialState = {
  tickets: [],
}

const dataReducer = (state = initialState, action = undefined) => {
  switch (action.type) {
    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.allTickets],
      }

    default:
      return state
  }
}

export default dataReducer
