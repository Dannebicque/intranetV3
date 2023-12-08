// Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/adm/semestre_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/12/2023 14:11

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['semestreModalZone']

  static values = {
    url: String,
    urlSave: String,
  }

  async toggle(event) {
    const _value = event.currentTarget.value
    const { actif } = event.currentTarget.dataset

    const params = new URLSearchParams({
      // semestre: _value,
      actif,
    })
    const response = await fetch(`${this.urlValue}?${params.toString()}`)
    // Met à jour la vue avec les données du semestre mis à jour.
    this.updateView(_value)

    this.dispatch(`semestre:updated:${_value}`, {
      detail: {
        semestre: _value,
      },
    })
  }

  updateView(semestre) {
    // Sélectionne les éléments nécessaires dans le DOM.
    const semestreActifElement = this.element.querySelector('.semestre-active')
    const semestreActifBtn = this.element.querySelector('.semestre-btn-active')

    // Met à jour le contenu de l'élément avec les nouvelles valeurs.
    if (semestreActifElement.textContent === 'Actif') {
      semestreActifElement.textContent = 'Inactif'
      semestreActifElement.classList.remove('bg-success')
      semestreActifElement.classList.add('bg-danger')
      semestreActifBtn.classList.remove('fa-eye-slash')
      semestreActifBtn.classList.add('fa-eye')
      semestreActifBtn.dataset.actif = 0
    } else {
      semestreActifElement.textContent = 'Actif'
      semestreActifElement.classList.remove('bg-danger')
      semestreActifElement.classList.add('bg-success')
      semestreActifBtn.classList.remove('fa-eye')
      semestreActifBtn.classList.add('fa-eye-slash')
      semestreActifBtn.dataset.actif = 1
    }
  }
}
