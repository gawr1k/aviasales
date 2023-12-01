/* eslint-disable default-param-last */
const initialState = {
  selectedOption: [],
};

export default function selectedOptionReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SELECTED_OPTION':
      return {
        ...state,
        selectedOption: action.payload,
      };

    case 'ADD_SELECTED_OPTION':
      return {
        ...state,
        selectedOption: action.payload,
      };

    case 'REMOVE_SELECTED_OPTION':
      return {
        ...state,
        selectedOption: [],
      };

    default:
      return state;
  }
}
