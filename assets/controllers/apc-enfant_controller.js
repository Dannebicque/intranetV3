// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/controllers/modal_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/10/2021 21:49

import {Controller} from '@hotwired/stimulus'
import {post} from '../js/fetch'
import {addCallout} from '../js/util'

export default class extends Controller {
  static targets = ['content']
  static values = {
    urlListe: String,
    urlPost: String,
    urlDelete: String,
  }

  async removeEnfant (e) {
    post(this.urlDeleteValue, {
      enfant: e.target.dataset.enfant
    }).then(async (data) => {
      addCallout('success', 'Enfant supprimé')
      this._updateContent()
    }).catch((error) => {
      addCallout('danger', 'Erreur lors de la suppression')
    })
  }

  async addEnfant (e) {
    console.log('add')
    post(this.urlPostValue, {
      enfant: document.getElementById('ressourceEnfant').value
    }).then(async (data) => {
      addCallout('success', 'Enfant ajouté')
      this._updateContent()
    }).catch((error) => {
      addCallout('danger', 'Erreur lors de l\'ajout')
    })
  }

  async _updateContent () {
    this.contentTarget.innerHTML = window.da.loaderStimulus

    const response = await fetch(`${this.urlListeValue}`)
    this.contentTarget.innerHTML = await response.text()
  }

}
