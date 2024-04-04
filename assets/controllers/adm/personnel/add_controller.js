// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/adm/personnel/add_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/04/2024 10:53

import { Controller } from '@hotwired/stimulus'
import { useDebounce } from 'stimulus-use'
import JsonResponse from '../../../js/JsonResponse'

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
    this._updateListe(event.target.value)
  }

  async _updateListe(needle) {
    const param = new URLSearchParams()
    param.append('search', needle)

    const response = await fetch(`${this.urlListeValue}?${param.toString()}`)
    this.listeTarget.innerHTML = await response.text()
  }

  async addPersonnel(event) {
    const personnelId = event.params.slug
    const body = new FormData()
    body.append('slug', personnelId)
    const url = `${this.urlAddPersonnelValue}`
    await fetch(url, {
      method: 'POST',
      body,
    }).then((response) => {
      JsonResponse(response)
    })
  }
}
