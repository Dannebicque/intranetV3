// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/app_personnel/previsionnel_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/03/2024 08:05

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static values = {
    url: String,
    semestre: String,
  }

  static targets = ['liste']

  connect() {
    console.log('connect')
    this._load(this.semestreValue)
  }

  changeSemestre(event) {
    this._load(event.target.value)
  }

  _load(semestre) {
    const params = new URLSearchParams()
    params.append('semestre', semestre)
    fetch(`${this.urlValue}?${params.toString()}`)
      .then((response) => response.text())
      .then((html) => {
        this.listeTarget.innerHTML = html
      })
  }
}
