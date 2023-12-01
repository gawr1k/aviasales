import { v4 } from 'uuid';
import './App.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './actions/dataActions';
import Card from './components/Card/Card';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import countTotalStops from './components/Card/countTotalStops/countTotalStops';

function App() {
  const [visible, setVisible] = React.useState(5);
  const { tickets } = useSelector((state) => state.data);
  const { transfers } = useSelector(state => state.transfers);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <main className="content">
        <Filter/>
        <div className="navigation__container">
          <Navigation />
          {tickets &&
            tickets
              .filter((ticket) => {
                const totalStops = countTotalStops(ticket);
                return transfers.includes(totalStops) || transfers.includes('all');
              })
              .slice(0, visible)
              .map((ticket) => (
                <Card
                  countTotalStops={countTotalStops(ticket)} 
                  key={v4()}
                  price={ticket.price}
                  img={ticket.carrier}
                  origin={ticket.segments[0].origin}
                  destination={ticket.segments[0].destination}
                  date={ticket.segments[0].date}
                  duration={ticket.segments[0].duration}
                  backorigin={ticket.segments[1].origin}
                  backdestination={ticket.segments[1].destination}
                  backdate={ticket.segments[1].date}
                  backduration={ticket.segments[1].duration}
                  stops={ticket.segments[0].stops}
                  backstops={ticket.segments[1].stops}
                />
              ))}
          {tickets && visible < tickets.length && transfers.length > 0 && (
            <button type="button" onClick={() => setVisible((v) => v + 5)}>
              Показать ещё
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
export default App;
