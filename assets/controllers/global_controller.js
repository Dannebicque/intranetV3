// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/global_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/04/2024 10:39

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['search']

  connect() {
    document.addEventListener('keydown', this.handleKeydown.bind(this))
    if (navigator.userAgent.includes('Mac')) {
      this.searchTarget.innerText = 'cmd+k'
    } else {
      this.searchTarget.innerText = 'ctrl+k'
    }
  }

  disconnect() {
    document.removeEventListener('keydown', this.handleKeydown.bind(this))
  }

  handleKeydown(event) {
    // meta for Mac, ctrl for Linux/Windows
    const pressedCtrl = event.metaKey || event.ctrlKey
    const pressedKey = event.key
    if (pressedCtrl && pressedKey === 'k') {
      // dispatch event
      this.dispatch('openSearch')
    }
  }
}
