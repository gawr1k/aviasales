/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React from 'react';
import './Filter.scss';


export default function Filter() {
  const [transfers, setTransfers] = React.useState([]);

  const handleSelectAll = () => {

    if (transfers.includes('all')) {
      console.log(transfers)
      setTransfers([]);
    } else {
      console.log(transfers)
      setTransfers(['0', '1', '2', '3','all']); 
    }

  }

  const handleChange = (value) => {
    if(transfers.includes(value)) {
      setTransfers(prev => prev.filter(o => o !== value))
      console.log(transfers)
    
    } else {
      setTransfers(prev => [...prev, value])
      console.log(transfers)
    }
  }

  return (
    <fieldset className="filter">
      <h3 className="filter__title">Количество пересадок</h3>
      <label className="filter__checkbox" htmlFor="allStops">
        <input className="filter__checkbox__input" type="checkbox" id="allStops" name="allStops" value="all" checked={transfers.includes("all")} onChange={handleSelectAll} />
        <span className="filter__checkbox__span" />
        Все
      </label>
      <label className="filter__checkbox" htmlFor="nonStop">
        <input className="filter__checkbox__input" type="checkbox" id="nonStop" name="nonStop" value="0" checked={transfers.includes("0")} onChange={()=>handleChange('0')}/>
        <span className="filter__checkbox__span" />
        Без пересадок
      </label>
      <label className="filter__checkbox" htmlFor="oneStop">
        <input className="filter__checkbox__input" type="checkbox" id="oneStop" name="oneStop" value="1" checked={transfers.includes("1")} onChange={()=>handleChange('1')}/>
        <span className="filter__checkbox__span" />
        1 пересадка
      </label>
      <label className="filter__checkbox" htmlFor="twoStops">
        <input className="filter__checkbox__input" type="checkbox" id="twoStops" name="twoStops" value="2" checked={transfers.includes("2")} onChange={()=>handleChange('2')}/>
        <span className="filter__checkbox__span" />
        2 пересадки
      </label>
      <label className="filter__checkbox" htmlFor="threeStops">
        <input className="filter__checkbox__input" type="checkbox" id="threeStops" name="threeStops" value="3" checked={transfers.includes("3")} onChange={()=>handleChange('3')}/>
        <span className="filter__checkbox__span" />
        3 пересадки
      </label>
    </fieldset>
  );
}
