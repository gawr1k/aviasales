import React from 'react';
import './Filter.scss';

export default function Filter() {
  return (
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
  );
}
