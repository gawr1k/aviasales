/* eslint-disable jsx-a11y/label-has-associated-control */
import './App.scss';
import React, { useEffect } from 'react';
import AviasalesTicketFetcher from './api/api';
import Card from './components/Card/Card';

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
            <input className="filter__checkbox__input" type="checkbox" id="allStops" name="allStops" value="all" />
            <span className="filter__checkbox__span" />
            Все
          </label>
          <label className="filter__checkbox" htmlFor="nonStop">
            <input className="filter__checkbox__input" type="checkbox" id="nonStop" name="nonStop" value="0" />
            <span className="filter__checkbox__span" />
            Без пересадок
          </label>
          <label className="filter__checkbox" htmlFor="oneStop">
            <input className="filter__checkbox__input" type="checkbox" id="oneStop" name="oneStop" value="1" />
            <span className="filter__checkbox__span" />
            1 пересадка
          </label>
          <label className="filter__checkbox" htmlFor="twoStops">
            <input className="filter__checkbox__input" type="checkbox" id="twoStops" name="twoStops" value="2" />
            <span className="filter__checkbox__span" />
            2 пересадки
          </label>
          <label className="filter__checkbox" htmlFor="threeStops">
            <input className="filter__checkbox__input" type="checkbox" id="threeStops" name="threeStops" value="3" />
            <span className="filter__checkbox__span" />
            3 пересадки
          </label>
        </fieldset>
        <div className="navigation__container">
          <nav className="content__navigation">
            <input type="radio" id="cheap" name="filter" className="content__navigation__radio" />
            <label htmlFor="cheap" className="content__navigation__label one">Самый дешевый</label>

            <input type="radio" id="fast" name="filter" className="content__navigation__radio" />
            <label htmlFor="fast" className="content__navigation__label two">Самый быстрый</label>

            <input type="radio" id="optimal" name="filter" className="content__navigation__radio" />
            <label htmlFor="optimal" className="content__navigation__label three">Оптимальный</label>
          </nav>
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}
export default App;
