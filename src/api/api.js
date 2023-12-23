class AviasalesTicketFetcher {
  constructor() {
    this.baseUrl = 'https://aviasales-test-api.kata.academy'
    this.searchId = null
  }

  async getSearchId() {
    const url = new URL('/search', this.baseUrl)
    try {
      const response = await fetch(url.href)
      if (!response.ok) {
        throw new Error(`getSearchId failed with status: ${response.status}`)
      }
      const data = await response.json()
      this.searchId = data.searchId
      return this.searchId
    } catch (error) {
      throw new Error(`getSearchId failed: ${error.message}`)
    }
  }

  async getTickets() {
    if (!this.searchId) {
      throw new Error('searchId is not available')
    }

    const url = new URL('/tickets', this.baseUrl)
    url.searchParams.set('searchId', this.searchId)

    try {
      const response = await fetch(url.href)
      if (!response.ok) {
        throw new Error(`getTickets failed with status: ${response.status}`)
      }
      const data = await response.json()
      return data.tickets
    } catch (error) {
      throw new Error(`getTickets failed: ${error.message}`)
    }
  }
}

export default AviasalesTicketFetcher
