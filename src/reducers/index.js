/* eslint-disable default-param-last */
// reducers/index.js
const initialState = {
  data: {
    searchId: null,
    tickets: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        data: {
          searchId: action.payload.searchId,
          tickets: action.payload.tickets,
        },
      };
    default:
      return state;
  }
};
