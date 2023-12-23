function formatTime(isoString) {
  const isoDate = new Date(isoString)
  const hours = isoDate.getHours().toString().padStart(2, '0')
  const minutes = isoDate.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

export default formatTime
