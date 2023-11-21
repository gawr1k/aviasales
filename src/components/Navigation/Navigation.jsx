import React from 'react';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav className="content__navigation">
      <label htmlFor="cheap" className="content__navigation__label one">
        <input type="radio" id="cheap" name="sorting" className="content__navigation__radio" />
        Самый дешевый
      </label>

      <label htmlFor="fast" className="content__navigation__label two">
        <input type="radio" id="fast" name="sorting" className="content__navigation__radio" />
        Самый быстрый
      </label>

      <label htmlFor="optimal" className="content__navigation__label three">
        <input type="radio" id="optimal" name="sorting" className="content__navigation__radio" />
        Оптимальный
      </label>
    </nav>

  );
}
