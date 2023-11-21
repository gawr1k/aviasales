/* eslint-disable jsx-a11y/label-has-associated-control */
import './App.scss';
import React, { useEffect } from 'react';
import AviasalesTicketFetcher from './api/api';
import Card from './components/Card/Card';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';

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
    <div className="container">
      <Header />
      <main className="content">
        <Filter />
        <div className="navigation__container">
          <Navigation />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}
export default App;
