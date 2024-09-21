// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/apc-enfant_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/04/2024 10:36

import { Controller } from '@hotwired/stimulus'
import { post } from '../js/fetch'
import { addCallout } from '../js/util'

export default class extends Controller {
  static targets = ['content', 'contentDiplome']

  static values = {
    urlListe: String,
    urlPost: String,
    urlDelete: String,
    urlListeDiplome: String,
    urlPostDiplome: String,
    urlDeleteDiplome: String,
    urlUpdateGroupe: String,
  }

  changeGroupe(e) {
    post(this.urlUpdateGroupeValue, {
      enfant: e.target.dataset.enfant,
      groupes: this._getSelectedOptions(e.target),
    }).then(async () => {
      addCallout('success', 'Groupe mis à jour')
    }).catch(() => {
      addCallout('danger', 'Erreur lors de la mise à jour')
    })
  }

  async removeEnfant(e) {
    post(this.urlDeleteValue, {
      enfant: e.target.dataset.enfant,
    }).then(async () => {
      addCallout('success', 'Enfant supprimé')
      await this._updateContent()
    }).catch(() => {
      addCallout('danger', 'Erreur lors de la suppression')
    })
  }

  _getSelectedOptions(sel) {
    const opts = [];
    let opt;
    const len = sel.options.length;
    for (let i = 0; i < len; i++) {
      opt = sel.options[i];

      if (opt.selected) {
        opts.push(opt.value);
      }
    }

    return opts;
  }

  async addEnfant(e) {
    post(this.urlPostValue, {
      enfant: document.getElementById('ressourceEnfant').value,
      groupes: this._getSelectedOptions(document.getElementById('groupeAdd')),
    }).then(async () => {
      addCallout('success', 'Enfant ajouté')
      await this._updateContent()
    }).catch(() => {
      addCallout('danger', 'Erreur lors de l\'ajout')
    })
  }

  async _updateContent() {
    this.contentTarget.innerHTML = window.da.loaderStimulus

    const response = await fetch(`${this.urlListeValue}`)
    this.contentTarget.innerHTML = await response.text()
  }

  async removeDiplome(e) {
    post(this.urlDeleteDiplomeValue, {
      diplome: e.target.dataset.semestre,
    }).then(async () => {
      addCallout('success', 'Diplôme supprimé')
      this._updateContentDiplome()
    }).catch(() => {
      addCallout('danger', 'Erreur lors de la suppression')
    })
  }

  async addDiplome(e) {
    post(this.urlPostDiplomeValue, {
      diplome: document.getElementById('semestreAdd').value,
    }).then(async () => {
      addCallout('success', 'Diplôme ajouté')
      this._updateContentDiplome()
    }).catch(() => {
      addCallout('danger', 'Erreur lors de l\'ajout')
    })
  }

  async _updateContentDiplome() {
    this.contentDiplomeTarget.innerHTML = window.da.loaderStimulus

    const response = await fetch(`${this.urlListeDiplomeValue}`)
    this.contentDiplomeTarget.innerHTML = await response.text()
  }
}
