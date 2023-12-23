const initialState = {
  data: {
    searchId: [],
    tickets: [],
  },
}

const dataReducer = (state = initialState, action = undefined) => {
  switch (action.type) {
    case 'GET_DATA_SUCCESS':
      return {
        searchId: action.payload.searchId,
        tickets: action.payload.tickets,
      }

    default:
      return state
  }
}

export default dataReducer
