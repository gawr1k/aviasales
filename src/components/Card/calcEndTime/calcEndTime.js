function calculateEndTime(startDate, duration) {
  const startDateObject = new Date(startDate);
  const endDateObject = new Date(startDateObject.getTime() + duration * 60000);

  const hours = endDateObject.getUTCHours().toString().padStart(2, '0');
  const minutes = endDateObject.getUTCMinutes().toString().padStart(2, '0');

  const formattedEndTime = `${hours}:${minutes}`;
  return formattedEndTime;
}

export default calculateEndTime;
