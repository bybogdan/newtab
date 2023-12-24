import Alpine from 'alpinejs'

declare global {
  interface Window {
    Alpine: any
  }
}

window.Alpine = Alpine

Alpine.data('search', () => ({
  query: '',
  search() {
    if (this.query.length > 0) {
      window.location.href = `https://duckduckgo.com/?q=${this.query.toLowerCase()}`
    }
  },
}))

Alpine.start()
