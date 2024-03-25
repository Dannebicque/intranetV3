// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/load_content_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 22/03/2024 08:22

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static values = {
    url: String,
    inital: {
      type: String,
      default: '',
    },
  }

  static targets = ['content']

  connect() {
    if (this.initialValue !== '') {
      this._loadContent(this.initialValue)
    }
  }

  change(event) {
    this._loadContent(event.target.value)
  }

  async _loadContent(value) {
    const param = new URLSearchParams({
      value,
    })
    this.contentTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(`${this.urlValue}?${param.toString()}`)
    this.contentTarget.innerHTML = await response.text()
  }
}
