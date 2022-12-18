// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/mcc_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 18/12/2022 11:42

import { Controller } from '@hotwired/stimulus'
import { addCallout } from '../js/util'

export default class extends Controller {
  static targets = ['synthese']

  static values = {
    urlMcc: String,
    urlAddMcc: String,
    urlDuplicateMcc: String,
    urlSupprMcc: String,
  }

  connect() {
    this._loadSynthese()
  }

  supprMcc(event) {
    if (confirm('Voulez-vous supprimer cette MCC ?')) {
      const params = new URLSearchParams({
        id: event.params.id,
      })

      fetch(`${this.urlSupprMccValue}?${params.toString()}`, { method: 'DELETE' }).then((response) => response.json()).then((data) => {
        if (data === true) {
          addCallout('MCC supprimée', 'success')
          this._loadSynthese()
        } else {
          addCallout('Erreur lors de la suppression de la MCC', 'error')
        }
      })
    }
  }

  duplicateMcc(event) {
    const params = new URLSearchParams({
      id: event.params.id,
    })

    fetch(`${this.urlDuplicateMccValue}?${params.toString()}`, { method: 'POST' }).then((response) => response.json()).then((data) => {
      if (data === true) {
        addCallout('MCC dupliquée', 'success')
        this._loadSynthese()
      } else {
        addCallout('Erreur lors de la recopie de la MCC', 'error')
      }
    })
  }

  async addMcc(event) {
    const body = {
      method: 'POST',
      body: JSON.stringify({
        typeEpreuve: document.getElementById('mcc_typeEpreuve').value,
        coefficient: document.getElementById('mcc_coefficient').value,
      }),
    }
    await fetch(`${this.urlAddMccValue}`, body).then((response) => response.json()).then((data) => {
      if (data === true) {
        addCallout('MCC enregistrée', 'success')
        this._loadSynthese()
      } else {
        addCallout('Erreur lors de l\'enregistrement des MCC', 'error')
      }
    })
  }

  async _loadSynthese() {
    this.syntheseTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(`${this.urlMccValue}`)
    this.syntheseTarget.innerHTML = await response.text()
  }
}
