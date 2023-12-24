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

Alpine.data('settingsModal', () => ({
  showModal: false,
  items: JSON.parse(localStorage.getItem('items') || '[]'),
  newItemText: '',
  newItemLink: '',

  getItems() {
    this.items = JSON.parse(localStorage.getItem('items') || '[]')
  },

  addItem() {
    if (this.newItemText && this.newItemLink) {
      this.items.push({ text: this.newItemText, link: this.newItemLink })
      this.newItemText = ''
      this.newItemLink = ''
      this.updateLocalStorage()
    }
  },

  removeItem(index: number) {
    this.items.splice(index, 1)
    this.updateLocalStorage()
  },

  updateLocalStorage() {
    localStorage.setItem('items', JSON.stringify(this.items))
  },
}))

Alpine.start()
