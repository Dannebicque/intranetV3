// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/apc-ressource-form_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 09/04/2024 14:33

import { Controller } from '@hotwired/stimulus'
import Routing from 'fos-router'

export default class extends Controller {
  static values = {
    ressource: String,
  }

  static targets = ['acRessources', 'saeRessource']

  connect() {
    this.competences = []
    this.semestres = []
    let ordre = null

    if (this.hasRessourceValue) {
      document.querySelectorAll('input[name="apc_ressource[competences][]"]:checked').forEach((e) => {
        this.competences.push(e.value)
      })

      document.querySelectorAll('input[name="apc_ressource[semestres][]"]:checked').forEach((e) => {
        ordre = e.dataset.ordre
        this.semestres.push(e.value)
      })

      this._updateCheckboxSemestres(ordre)
      this._updateRessourceSae()
      this._updateRessourcesApprentisagesCritiques()
    }
  }

  _updateCheckboxSemestres(ordre) {
    // pour chaque checkbox de semestre, désactiver le checkbox si data-ordre est différent de l'ordre passé en paramètre
    document.querySelectorAll('input[name="apc_ressource[semestres][]"]').forEach((e) => {
      if (ordre === null) {
        e.disabled = false
      } else {
        e.disabled = e.dataset.ordre !== ordre
      }
    })
  }

  changeSemestre(e) {
    const sem = e.target.value
    if (e.target.checked) {
      if (!this.semestres.includes(sem)) {
        this.semestres.push(sem)
      }
    } else {
      this.semestres = this.semestres.filter((s) => s !== sem)
    }
    const ordre = this.semestres[0] ? e.target.dataset.ordre : null
    this._updateCheckboxSemestres(ordre)

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
        semestres: this.semestres,
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
        semestres: this.semestres,
        ressource: this.ressourceValue,
      }),
    })
    this.saeRessourceTarget.innerHTML = await response.text()
  }
}
