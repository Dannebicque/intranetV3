// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/plan-cours-adm_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/02/2024 20:58

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['content']

  static values = {
    urlDiplome: String,
    urlRecherche: String,
  }

  connect() {
    let diplome = null
    document.querySelectorAll('.changeDiplome').forEach((element) => {
      if (element.classList.contains('active')) {
        diplome = element.dataset.diplome
      }
    })

    this._loadDiplome(diplome)
  }

  changeDiplome(event) {
    document.querySelectorAll('.changeDiplome').forEach((element) => {
      element.classList.remove('active')
    })
    event.target.classList.add('active')
    this._loadDiplome(event.target.dataset.diplome)
  }

  async _loadDiplome(diplomeId, ppn = null) {
    this.contentTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      diplome: diplomeId,
      ppn,
    })
    const response = await fetch(`${this.urlDiplomeValue}?${params.toString()}`)
    this.contentTarget.innerHTML = await response.text()
  }
}
