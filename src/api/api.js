/* eslint-disable no-console */
class AviasalesTicketFetcher {
  constructor() {
    this.baseUrl = 'https://aviasales-test-api.kata.academy'
    this.searchId = null
  }

  async getSearcId() {
    try {
      const response = await fetch(`${this.baseUrl}/search`)
      const data = await response.json()
      this.searchId = data.searchId
      return this.searchId
    } catch (error) {
      console.log('Failed to get searchId:', error)
      return null
    }
  }

  async getTickets() {
    if (!this.searchId) {
      console.error('SearchId is not available. Please call getSearchId first.')
      return null
    }

    try {
      const response = await fetch(
        `${this.baseUrl}/tickets?searchId=${this.searchId}`
      )
      const data = await response.json() // Add 'await' here
      return data.tickets
    } catch (error) {
      console.error('Failed to get tickets:', error)
      return null
    }
  }
}

export default AviasalesTicketFetcher
