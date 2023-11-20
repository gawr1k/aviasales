/* eslint-disable jsx-a11y/label-has-associated-control */
import './App.scss';
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
    <div className="container">
      <header className="header">
        <img className="header__logo" src="./Logo.png" alt="Logo-aviasales" />
      </header>
      <main className="content">
        <fieldset className="filter">
          <h3 className="filter__title">Количество пересадок</h3>
          <label className="filter__checkbox" htmlFor="allStops">
            <input type="checkbox" name="allStops" value="all" />
            Все
          </label>
          <label className="filter__checkbox" htmlFor="nonStop">
            <input type="checkbox" name="nonStop" value="0" />
            Без пересадок
          </label>
          <label className="filter__checkbox" htmlFor="oneStop">
            <input type="checkbox" name="oneStop" value="1" />
            1 пересадка
          </label>
          <label className="filter__checkbox" htmlFor="twoStops">
            <input type="checkbox" name="twoStops" value="2" />
            2 пересадки
          </label>
          <label className="filter__checkbox" htmlFor="threeStops">
            <input type="checkbox" name="threeStops" value="3" />
            3 пересадки
          </label>
        </fieldset>
        <nav className="content__navigation">
          <input type="radio" id="cheap" name="filter" className="content__navigation__radio" />
          <label htmlFor="cheap" className="content__navigation__label one">Самый дешевый</label>

          <input type="radio" id="fast" name="filter" className="content__navigation__radio" />
          <label htmlFor="fast" className="content__navigation__label two">Самый быстрый</label>

          <input type="radio" id="optimal" name="filter" className="content__navigation__radio" />
          <label htmlFor="optimal" className="content__navigation__label three">Оптимальный</label>
        </nav>
      </main>
    </div>
  );
}

export default App;
