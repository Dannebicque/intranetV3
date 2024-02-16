// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/load_content_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/02/2024 10:12

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
    console.log(this.initialValue)
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
