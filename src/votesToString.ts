const votesToString = (votes: number): string => {
  if (votes < 1000) return votes.toString()
  if (votes < 1000000) return `${(votes / 1000).toFixed(1)}k`
  if (votes < 1000000000) return `${(votes / 1000000).toFixed(1)}m`
  return `${(votes / 1000000000).toFixed(1)}b`
}

export default votesToString
