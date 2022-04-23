// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/controllers/modal_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/10/2021 21:49

import {Controller} from '@hotwired/stimulus'
import {post} from '../js/fetch'
import {addCallout} from '../js/util'

export default class extends Controller {
  static targets = ['content','contentDiplome']
  static values = {
    urlListe: String,
    urlPost: String,
    urlDelete: String,
    urlListeDiplome: String,
    urlPostDiplome: String,
    urlDeleteDiplome: String,
    urlUpdateGroupe: String,
  }

  changeGroupe (e) {
    post(this.urlUpdateGroupeValue, {
      enfant: e.target.dataset.enfant,
      groupe: e.target.value
    }).then(async (data) => {
      addCallout('success', 'Groupe mis à jour')
    }).catch((error) => {
      addCallout('danger', 'Erreur lors de la mise à jour')
    })
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

  async removeDiplome (e) {
    post(this.urlDeleteDiplomeValue, {
      diplome: e.target.dataset.semestre
    }).then(async (data) => {
      addCallout('success', 'Diplôme supprimé')
      this._updateContentDiplome()
    }).catch((error) => {
      addCallout('danger', 'Erreur lors de la suppression')
    })
  }

  async addDiplome (e) {
    post(this.urlPostDiplomeValue, {
      diplome: document.getElementById('semestreAdd').value
    }).then(async (data) => {
      addCallout('success', 'Diplôme ajouté')
      this._updateContentDiplome()
    }).catch((error) => {
      addCallout('danger', 'Erreur lors de l\'ajout')
    })
  }

  async _updateContentDiplome () {
    this.contentDiplomeTarget.innerHTML = window.da.loaderStimulus

    const response = await fetch(`${this.urlListeDiplomeValue}`)
    this.contentDiplomeTarget.innerHTML = await response.text()
  }

}
