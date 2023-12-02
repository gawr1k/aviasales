/* eslint-disable default-param-last */
const initialState = {
  data: {
    searchId: [],
    tickets: [],
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_SUCCESS':
      // console.log('Before', state);
      return {
        searchId: action.payload.searchId,
        tickets: action.payload.tickets,
      };

    default:
      // console.log('After', state);
      return state;
  }
};

export default dataReducer;
