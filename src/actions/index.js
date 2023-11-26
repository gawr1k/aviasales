/* eslint-disable import/prefer-default-export */
// actions/index.js
// actions/index.js
// import { getSearchId, getTickets } from '../api/api';
import AviasalesTicketFetcher from '../api/api';

const aviasalesAPI = new AviasalesTicketFetcher();

export const getdata = () => async (dispatch) => {
  try {
    // Получаем searchId
    const searchId = await aviasalesAPI.getSearcId();
    if (searchId) {
      // Получаем билеты с использованием searchId
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
// const ticketFetcher = new AviasalesTicketFetcher();

// export const fetchSearchId = () => async (dispatch) => {
//   try {
//     const searchId = await ticketFetcher.getSearchId();
//     // Здесь вы можете использовать searchId или передать его в действие Redux
//     dispatch({ type: 'SEARCH_ID_FETCHED', payload: searchId });
//   } catch (error) {
//     console.error('Failed to fetch searchId:', error);
//   }
// };

// export const fetchTickets = () => async (dispatch) => {
//   try {
//     const tickets = await ticketFetcher.getTickets();
//     // Здесь вы можете использовать tickets или передать их в действие Redux
//     dispatch({ type: 'TICKETS_FETCHED', payload: tickets });
//   } catch (error) {
//     console.error('Failed to fetch tickets:', error);
//   }
// };

// const ticketFetcher = new AviasalesTicketFetcher();

// export function getdata() {
//   return async (dispatch) => {
//     try {
//       // 1. Получаем searchId
//       const searchId = await ticketFetcher.getSearchId();

//       // 2. Получаем билеты
//       const tickets = await ticketFetcher.getTickets(searchId);

//       // 3. Сохраняем билеты в store
//       dispatch({
//         type: 'tickets/setTickets',
//         payload: tickets,
//       });
//     } catch (e) {
//       // обработка ошибок
//     }
//   };
// }
