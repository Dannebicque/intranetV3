// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/adm/justifier-absences_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/04/2024 18:59

import { Controller } from '@hotwired/stimulus'
import { addCallout } from '../../js/util'

export default class extends Controller {
  static values = {
    urlListeAbsences: String,
    urlJustifierAbsence: String,
  }

  static targets = ['listeJustifie']

  changeEtudiant(event) {
    const params = new URLSearchParams()
    params.append('etudiant', event.target.value)

    fetch(`${this.urlListeAbsencesValue}?${params.toString()}`)
      .then((response) => response.text())
      .then((data) => {
        this.listeJustifieTarget.innerHTML = data
      })
  }

  checkAbsence(event) {
    const absence = event.target.getAttribute('data-absence')
    const etat = event.target.checked ? 1 : 0

    console.log(event.target.checked, etat)

    const params = new URLSearchParams()
    params.append('absence', absence)
    params.append('etat', etat)

    fetch(`${this.urlJustifierAbsenceValue}?${params.toString()}`)
      .then((response) => response.json())
      .then((data) => {
        // récupérer la ligne du tableau de l'absence et changer la couleur

        const ligne = event.target.closest('tr')
        ligne.classList.remove('bg-pale-warning', 'bg-pale-success')
        ligne.classList.add(data ? 'bg-pale-success' : 'bg-pale-warning')

        addCallout(data ? 'Absence justifiée' : 'Absence marquée non justifiée', 'success')
      })
  }
}
