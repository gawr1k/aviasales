import './App.css';
import React, { useEffect } from 'react';
import AviasalesTicketFetcher from './api/api';

function App() {
  useEffect(() => {
    const aviasalesAPI = new AviasalesTicketFetcher();
    const fetchData = async () => {
      // Получаем searchId
      const searchId = await aviasalesAPI.getSearcId();
      if (searchId) {
        console.log(`SearchId: ${searchId}`);

        // Получаем билеты с использованием searchId
        const tickets = await aviasalesAPI.getTickets();
        if (tickets) {
          console.log('Tickets:');
          tickets.forEach((ticket) => {
            console.log(ticket);
          });
        } else {
          console.log('Failed to get tickets.');
        }
      } else {
        console.log('Failed to get searchId.');
      }
    };
    fetchData();
  }, []);

  return (
    <>
    </>
  );
}

export default App;
