// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/controllers/modal_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/10/2021 21:49

import {Controller} from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['content']
  static values = {
    urlDiplome: String
  }



  connect() {
    let diplome = null
    document.querySelectorAll('.changeDiplome').forEach(element => {
      if (element.classList.contains('active')) {
        diplome = element.dataset.diplome
      }
    })

    this._loadDiplome(diplome)
  }

  changePn(event) {
    this._loadDiplome(event.target.dataset.diplome, event.value)
  }

  changeDiplome (event) {
    document.querySelectorAll('.changeDiplome').forEach(element => {
      element.classList.remove('active')
    })
    event.target.classList.add('active')
    this._loadDiplome(event.target.dataset.diplome)
  }

  async _loadDiplome (diplomeId, ppn = null) {
    this.contentTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      diplome: diplomeId,
      ppn: ppn
    })
    const response = await fetch(`${this.urlDiplomeValue}?${params.toString()}`)
    this.contentTarget.innerHTML = await response.text()
  }
}
