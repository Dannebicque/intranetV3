// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/change-departement_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/07/2024 19:01

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['listeChangeDepartement']

  static values = { url: String }

  connect() {
    console.log('Connect')
  }

  async changeDepartement() {
    console.log('Change departement')
    this.listeChangeDepartementTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(this.urlValue)
    this.listeChangeDepartementTarget.innerHTML = await response.text()
  }
}
