// Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/lookup-search-controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/07/2023 15:37

import { Controller } from '@hotwired/stimulus'
import { useDebounce } from 'stimulus-use'

export default class extends Controller {
  element = null

  static targets = ['reponses']

  static values = {
    url: String,
  }

  static debounces = ['search'];

  connect() {
    useDebounce(this);
    this.element = document.getElementById('lookup-full')
  }

  openModal() {
    this.element.classList.add('reveal')
    document.getElementById('sidebar').classList.add('d-none')
    document.body.classList.add('no-scroll')
    this.element.querySelector('.lookup-form input').focus()
  }

  closeModal() {
    document.getElementById('sidebar').classList.remove('d-none')
    document.body.classList.remove('no-scroll')
    this.element.classList.remove('reveal')
  }

  onSearchInput(event) {
    this.search(event.currentTarget.value);
  }

  async search(event) {
    const params = new URLSearchParams({
      q: event,
    })
    const response = await fetch(`${this.urlValue}?${params.toString()}`)
    this.reponsesTarget.innerHTML = await response.text()
  }
}
