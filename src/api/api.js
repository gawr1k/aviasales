class AviasalesTicketFetcher {
  constructor() {
    this.baseUrl = 'https://aviasales-test-api.kata.academy'
  }

  async getSearchId() {
    const url = new URL('/search', this.baseUrl)
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`getSearchId no fetch ${res.status}`)
    }
    const data = await res.json()
    this.searchId = data.searchId
    return this.searchId
  }

  async getTickets(searchId) {
    const url = new URL('/tickets', this.baseUrl)
    url.searchParams.set('searchId', searchId)
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`getTickets no fetch ${res.status}`)
    }
    const data = await res.json()

    return data
  }
}
export default AviasalesTicketFetcher
