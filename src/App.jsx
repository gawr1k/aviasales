/* eslint-disable import/no-extraneous-dependencies */
import { v4 } from 'uuid';
import './App.scss';
import React, { useEffect } from 'react';
import AviasalesTicketFetcher from './api/api';
import Card from './components/Card/Card';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';

function App() {
  const [data, setData] = React.useState([]);
  const [visible, setVisible] = React.useState(5);

  useEffect(() => {
    const aviasalesAPI = new AviasalesTicketFetcher();
    const fetchData = async () => {
      // Получаем searchId
      const searchId = await aviasalesAPI.getSearcId();
      if (searchId) {
        // console.log(`SearchId: ${searchId}`);
        // Получаем билеты с использованием searchId
        const tickets = await aviasalesAPI.getTickets();
        if (tickets) {
          setData(tickets);
          // console.log('Tickets:');
          // tickets.forEach((ticket) => {
          //   console.log(ticket);
          // });
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
    <div className="container">
      <Header />
      <main className="content">
        <Filter />
        <div className="navigation__container">
          <Navigation />
          {data.slice(0, visible).map((ticket) => (
            // console.log(ticket)
            <Card
              key={v4()}
              price={ticket.price}
            />
          ))}
          {visible < data.length
          && <button type="button" onClick={() => setVisible((v) => v + 5)}>Показать ещё</button>}
        </div>
      </main>
    </div>
  );
}
export default App;
