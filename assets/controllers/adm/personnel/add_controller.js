// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/adm/personnel/add_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/03/2024 08:21

import { Controller } from '@hotwired/stimulus'
import { useDebounce } from 'stimulus-use'

export default class extends Controller {
  static targets = ['liste']

  static values = {
    urlListe: String,
    urlAddPersonnel: String,
  }

  static debounces = ['_updateListe']

  connect() {
    useDebounce(this)
    this._updateListe('')
  }

  search(event) {
    console.log(event.target.value)
    this._updateListe(event.target.value)
  }

  async _updateListe(needle) {
    const param = new URLSearchParams()
    param.append('search', needle)

    const response = await fetch(`${this.urlListeValue}?${param.toString()}`)
    this.listeTarget.innerHTML = await response.text()
  }
}
