// Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/adm/semestre-maj_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/12/2023 14:11

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['bloc_etudiant']

  static values = {
    url: String,
  }

  async toggle() {
    this.bloc_etudiantTarget.innerHTML = ''

    const response = await fetch(`${this.urlValue}`)
    this.bloc_etudiantTarget.innerHTML = await response.text()
  }
}
