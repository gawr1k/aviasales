class AviasalesTicketFetcher {
  constructor() {
    this.baseUrl = 'https://aviasales-test-api.kata.academy'
  }

  async getSearchId() {
    const url = new URL('/search', this.baseUrl)
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`getSearchId failed with status: ${response.status}`)
    }
    const data = await response.json()
    this.searchId = data.searchId
    return this.searchId
  }

  async getTickets(searchId) {
    const url = new URL('/tickets', this.baseUrl)
    url.searchParams.set('searchId', searchId)
    const response = await fetch(url.href)
    if (!response.ok) {
      throw new Error(`getTickets failed with status: ${response.status}`)
    }
    const data = await response.json()
    return data
  }
}

export default AviasalesTicketFetcher
