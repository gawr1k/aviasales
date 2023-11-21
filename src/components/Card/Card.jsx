import React from 'react';
import './Card.scss';

export default function Card() {
  return (
    <div className="content__card">
      <div className="content__card__container">
        <div className="content__card__container__header-card">
          <p className="content__card__container__header-card__price">13 400p</p>
          <img className="content__card__container__header-card__airlanes" src="./S7 Logo.png" alt="airlanes-logotype" />
        </div>
        <div className="content__card__container__info">
          <div className="content__card__container__info__route">
            <h5>MOW – HKT</h5>
            <h4>10:45 – 08:00</h4>
          </div>
          <div className="content__card__container__info__route">
            <h5>В пути</h5>
            <h4>21ч 15м</h4>
          </div>
          <div className="content__card__container__info__route">
            <h5>2 пересадки</h5>
            <h4>HKG, JNB</h4>
          </div>
        </div>
        <div className="content__card__container__info">
          <div className="content__card__container__info__route">
            <h5>MOW – HKT</h5>
            <h4>11:20 – 00:50</h4>
          </div>
          <div className="content__card__container__info__route">
            <h5>В пути</h5>
            <h4>13ч 30м</h4>
          </div>
          <div className="content__card__container__info__route">
            <h5>1 пересадка</h5>
            <h4>HKG</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
