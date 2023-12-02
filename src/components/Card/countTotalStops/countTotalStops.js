function countTotalStops(ticket) {
  return ticket.segments.reduce(
    (totalStops, segment) => totalStops + segment.stops.length,
    0,
  );
}

export default countTotalStops;
