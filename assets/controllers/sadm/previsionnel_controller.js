// Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/sadm/previsionnel_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 31/08/2023 17:01

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['content', 'contentAdd']

  static values = {
    url: String,
  }

  clearFiltre() {
    this.contentTarget.innerHTML = '<div class="alert alert-info">\n'
      + '                    Choisir au moins un filtre en plus de l\'année universitaire\n'
      + '                </div>'

    document.getElementById('sadm_previAnnee').value = ''
    document.getElementById('sadm_previDepartement').value = ''
    document.getElementById('sadm_previDiplome').value = ''
    document.getElementById('sadm_previMatiere').value = ''
    document.getElementById('sadm_previPersonnel').value = ''
  }

  changeFiltre() {
    this._updateContent()
  }

  connect() {
    this._updateContent()
  }

  async _updateContent() {
    const params = new URLSearchParams({
      annee: document.getElementById('sadm_previAnnee').value,
      departement: document.getElementById('sadm_previDepartement').value,
      diplome: document.getElementById('sadm_previDiplome').value,
      matiere: document.getElementById('sadm_previMatiere').value,
      intervenant: document.getElementById('sadm_previPersonnel').value,
    })

    this.contentTarget.innerHTML = window.da.loaderStimulus
    await fetch(`${this.urlValue}?${params.toString()}`, {}).then((response) => response.text()).then((html) => {
      this.contentTarget.innerHTML = html
    })
  }
}
