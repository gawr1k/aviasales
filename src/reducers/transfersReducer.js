const initialState = {
  transfers: [0, 1, 2, 3, 'all'],
}

export default function transfersReducer(
  state = initialState,
  action = undefined
) {
  switch (action.type) {
    case 'SET_TRANSFERS':
      return {
        ...state,
        transfers: action.payload,
      }

    case 'ADD_TRANSFER':
      return {
        ...state,
        transfers: [...state.transfers, action.payload],
      }

    case 'REMOVE_TRANSFER':
      return {
        ...state,
        transfers: state.transfers.filter((t) => t !== action.payload),
      }

    default:
      return state
  }
}
