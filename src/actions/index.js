import AviasalesTicketFetcher from '../api/api';

const aviasalesAPI = new AviasalesTicketFetcher();

export const getdata = () => async (dispatch) => {
  try {
    const searchId = await aviasalesAPI.getSearcId();
    if (searchId) {
      const tickets = await aviasalesAPI.getTickets(searchId);
      if (tickets) {
        dispatch({
          type: 'GET_DATA_SUCCESS',
          payload: {
            searchId,
            tickets,
          },
        });
      } else {
        console.log('Failed to get tickets. No tickets returned.');
      }
    } else {
      console.log('Failed to get searchId. No searchId returned.');
    }
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
};

export function onSortChange(sort) {
  return {
     type: 'SET_SORT',
     sort
  }; 
}
