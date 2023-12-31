const formatDuration = (duration) => {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60

  return `${hours ? `${hours}ч` : ''}${hours && minutes ? ' ' : ''}${
    minutes ? `${minutes}м` : ''
  }`
}

export default formatDuration
