// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/edt-personnel-controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/09/2022 15:48

import { Controller } from '@hotwired/stimulus'
import { post } from '../js/fetch'
import { addCallout } from '../js/util'

export default class extends Controller {
  static targets = ['etatAppel']

  static values = {
    urlCarnetDeBord: String,
    urlPasDAbsent: String,
  }

  btnPasAbsent(e) {
    e.preventDefault()
    const event = e.currentTarget.dataset.event
    post(this.urlPasDAbsentValue, { event: event, semestre: e.currentTarget.dataset.semestre }).then((data) => {
      if (data === true) {
        const element = document.getElementById('pointage' + event)
        element.classList.remove('btn-danger')
        element.firstElementChild.classList.remove('fa-times')
        element.firstElementChild.classList.add('fa-check')
        element.classList.add('btn-success')
        addCallout( 'Pas d\'absence enregistrée','success')
      } else {
        addCallout('Erreur lors de l\'enregistrement de l\'absence', 'danger')
      }
    })
  }

  btnCahierTexte(e) {
    e.preventDefault()
    // ouvrir modal avec données du créneau + zone de saisie, pré-rempli si déjà existante.
  }
}
