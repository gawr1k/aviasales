const initialState = {
  selectedOption: [],
}

export default function selectedOptionReducer(
  state = initialState,
  action = undefined
) {
  switch (action.type) {
    case 'ADD_SELECTED_OPTION':
      return {
        ...state,
        selectedOption: action.payload,
      }
    case 'REMOVE_SELECTED_OPTION':
      return {
        ...state,
        selectedOption: [],
      }
    default:
      return state
  }
}
