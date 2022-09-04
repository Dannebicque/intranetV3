// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/apc-ressource-form_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/09/2022 16:08

import { Controller } from '@hotwired/stimulus'
import Routing from 'fos-router'

export default class extends Controller {
  static values = {
    ressource: String,
  }

  static targets = ['acRessources', 'saeRessource']

  connect() {
    this.competences = []
    this.semestre = null

    if (this.hasRessourceValue) {
      document.querySelectorAll('input[name="apc_ressource[competences][]"]:checked').forEach((e) => {
        this.competences.push(e.value)
      })
      this.semestre = document.querySelector('input[name="apc_ressource[semestre]"]:checked').value
      this._updateRessourceSae()
      this._updateRessourcesApprentisagesCritiques()
    }
    this.semestres = []
  }

  changeSemestre(e) {
    this.semestre = e.target.value
    this._updateRessourcesApprentisagesCritiques()
    this._updateRessourceSae()
  }

  changeCompetence(e) {
    const sem = e.target.value
    if (e.target.checked) {
      if (!this.competences.includes(sem)) {
        this.competences.push(sem)
      }
    } else {
      this.competences = this.competences.filter((s) => s !== sem)
    }
    this._updateRessourcesApprentisagesCritiques()
  }

  async _updateRessourcesApprentisagesCritiques() {
    this.acRessourcesTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(Routing.generate('administration_apc_ressources_ajax_ac'), {
      method: 'POST',
      body: JSON.stringify({
        semestre: this.semestre,
        competences: this.competences,
        ressource: this.ressourceValue,
      }),
    })
    this.acRessourcesTarget.innerHTML = await response.text()
  }

  async _updateRessourceSae() {
    this.saeRessourceTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(Routing.generate('administration_apc_sae_ajax'), {
      method: 'POST',
      body: JSON.stringify({
        semestre: this.semestre,
        ressource: this.ressourceValue,
      }),
    })
    this.saeRessourceTarget.innerHTML = await response.text()
  }
}
