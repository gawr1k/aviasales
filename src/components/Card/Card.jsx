/* eslint-disable react/prop-types */
import React from 'react'

import './Card.scss'
import formatDuration from './formatData/formatData'
import getStopsLabel from './getStopsLabel/getStopsLabel'
import formatTime from './formatTime/formatTime'
import calculateEndTime from './calcEndTime/calcEndTime'

export default function Card({
  price,
  img,
  origin,
  destination,
  backorigin,
  backdestination,
  date,
  backdate,
  duration,
  backduration,
  stops,
  backstops,
}) {
  const baseUrl = 'https://pics.avs.io/99/36/'

  return (
    <div className="content__card">
      <div className="content__card__container">
        <div className="content__card__container__header-card">
          <p className="content__card__container__header-card__price">{`${price} P`}</p>
          <img
            className="content__card__container__header-card__airlanes"
            src={img ? `${baseUrl}${img}.png` : null}
            alt="airlanes-logotype"
          />
        </div>
        <div className="content__card__container__info">
          <div className="content__card__container__info__route">
            <h5>{`${origin} – ${destination}`}</h5>
            <h4>
              {`${formatTime(date)} - ${calculateEndTime(date, duration)}`}
            </h4>
          </div>
          <div className="content__card__container__info__route">
            <h5>В пути</h5>
            <h4>{formatDuration(duration)}</h4>
          </div>
          <div className="content__card__container__info__route">
            <h5>{getStopsLabel(stops)}</h5>
            <h4>{stops.join(', ')}</h4>
          </div>
        </div>
        <div className="content__card__container__info">
          <div className="content__card__container__info__route">
            <h5>{`${backorigin} – ${backdestination}`}</h5>
            <h4>
              {`${formatTime(backdate)} - ${calculateEndTime(
                backdate,
                backduration
              )}`}
            </h4>
          </div>
          <div className="content__card__container__info__route">
            <h5>В пути</h5>
            <h4>{formatDuration(backduration)}</h4>
          </div>
          <div className="content__card__container__info__route">
            <h5>{getStopsLabel(backstops)}</h5>
            <h4>{backstops.join(', ')}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
