// Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/questionnaire/parametres_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/01/2023 19:48

import { Controller } from '@hotwired/stimulus'
import { addCallout } from '../../js/util'

export default class extends Controller {

  static values = {
    urlSaveDonnees: String,
    urlSaveReglages: String,
  }

  async saveReglages(event) {
    console.log('saveReglages')
    event.preventDefault()
    const body = {
      method: 'POST',
      body: JSON.stringify({
        dateOuverture: document.getElementById('dateOuverture').value,
        dateFermeture: document.getElementById('dateFermeture').value,
        semestre: document.getElementById('semestre') ? document.getElementById('semestre').value : null,
        personnels: document.getElementById('choixPersonnel') ? document.getElementById('choixPersonnel').value : null,
      }),
    }
    await fetch(`${this.urlSaveReglagesValue}`, body)
    addCallout('Les réglages ont été sauvegardés.', 'success')
  }
}
