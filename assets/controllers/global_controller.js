// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/global_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 09/04/2024 11:41

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['search']

  connect() {
    document.addEventListener('keydown', this.handleKeydown.bind(this))
    const os = (navigator.platform.match(/mac|win|linux/i) || ['unknown'])[0].toLowerCase()
    if (os === 'mac') {
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
