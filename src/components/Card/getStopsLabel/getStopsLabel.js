const getStopsLabel = (stops) => {
  const stopsCount = stops.length;

  if (stopsCount === 1) {
    return '1 пересадка';
  } if (stopsCount > 1 && stopsCount < 5) {
    return `${stopsCount} пересадки`;
  }
  return `${stopsCount} пересадок`;
};

export default getStopsLabel;
