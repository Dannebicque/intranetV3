// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/trombinoscope_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/02/2024 20:58

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['contentSemestre']

  async changementSemestre(event) {
    await this._trombiSemestre(event.currentTarget)
  }

  async changementPersonnel(event) {
    await this._trombiPersonnel(event.currentTarget)
  }

  async changementTypegroupe(event) {
    await this._trombiTypeGroupe(event.currentTarget)
  }

  async _trombiPersonnel(el) {
    this.contentSemestreTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(Routing.generate('trombinoscope_personnel', { type: el.dataset.type }))
    this.contentSemestreTarget.innerHTML = await response.text()
  }

  async _trombiTypeGroupe(el) {
    this.contentSemestreTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(Routing.generate('trombinoscope_etudiant_semestre_type_groupe', {
      semestre: el.dataset.semestre,
      typegroupe: el.dataset.typegroupe,
    }))
    this.contentSemestreTarget.innerHTML = await response.text()
  }

  async _trombiSemestre(el) {
    this.contentSemestreTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(Routing.generate('trombinoscope_etudiant_semestre', { semestre: el.dataset.sem }))
    this.contentSemestreTarget.innerHTML = await response.text()
  }
}
