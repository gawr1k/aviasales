class AviasalesTicketFetcher {
  constructor() {
    this.baseUrl = 'https://aviasales-test-api.kata.academy'
    this.searchId = null
  }

  async getSearcId() {
    const url = new URL('/search', this.baseUrl)
    const response = await fetch(url.toString())
    const data = await response.json()
    this.searchId = data.searchId
    return this.searchId
  }

  async getTickets() {
    const url = new URL('/tickets', this.baseUrl)
    url.searchParams.set('searchId', this.searchId)
    const response = await fetch(url.toString())
    const data = await response.json()
    return data.tickets
  }
}

export default AviasalesTicketFetcher
