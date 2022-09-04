// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/apc-sae-form_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/09/2022 16:10

import { Controller } from '@hotwired/stimulus'
import Routing from 'fos-router'

export default class extends Controller {
  static values = {
    sae: String,
  }

  static targets = ['acSae', 'ressourcesSae']

  connect() {
    this.competences = []
    this.semestre = null

    if (this.hasSaeValue) {
      document.querySelectorAll('input[name="apc_sae[competences][]"]:checked').forEach((e) => {
        this.competences.push(e.value)
      })
      this.semestre = document.querySelector('input[name="apc_sae[semestre]"]:checked').value
      this._updateRessourceSae()
      this._updateSaesApprentisagesCritiques()
    }

    this.semestres = []
  }

  changeSemestre(e) {
    this.semestre = e.target.value
    this._updateSaesApprentisagesCritiques()
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
    this._updateSaesApprentisagesCritiques()
  }

  async _updateSaesApprentisagesCritiques() {
    this.acSaeTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(Routing.generate('administration_apc_sae_ajax_ac'), {
      method: 'POST',
      body: JSON.stringify({
        semestre: this.semestre,
        competences: this.competences,
        sae: this.saeValue,
      }),
    })
    this.acSaeTarget.innerHTML = await response.text()
  }

  async _updateRessourceSae() {
    this.ressourcesSaeTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(Routing.generate('administration_apc_ressources_ajax'), {
      method: 'POST',
      body: JSON.stringify({
        semestre: this.semestre,
        sae: this.saeValue,
      }),
    })
    this.ressourcesSaeTarget.innerHTML = await response.text()
  }
}
