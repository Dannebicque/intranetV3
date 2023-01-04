// Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/questionnaire/creation_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 02/01/2023 14:02

import { Controller } from '@hotwired/stimulus'
import { addCallout } from '../../js/util'
import tinymce from 'tinymce/tinymce.min'

export default class extends Controller {
  static targets = ['progressBar', 'stepZone', 'question', 'section']

  static values = {
    url: String,
    urlSave: String,
  }

  connect() {
    this._changeStep('intro')
  }

  changeStep(event) {
    this._changeStep(event.params.step, event.params.section)
  }

  async sauvegardeIntro(event) {
    event.preventDefault()
    this._saveIntro(event)
  }

  async sauvegardeFin(event) {
    event.preventDefault()
    this._saveFin(event)
  }

  async _saveFin() {
    const form = document.getElementById('questionnaire_qualite_fin')
    const dataForm = new FormData(form)
    dataForm.set('questionnaire_fin_texteFin', tinymce.get('questionnaire_fin_texteFin').getContent())

    const params = new URLSearchParams({
      step: 'fin',
    })

    const body = {
      method: 'POST',
      body: dataForm,
    }

    await fetch(`${this.urlSaveValue}?${params.toString()}`, body).then((response) => response.json()).then((data) => {
      if (data === true) {
        addCallout('Questionnaire enregistré', 'success')
      } else {
        addCallout('Erreur lors de l\'enregistrement du questionnaire', 'error')
      }
    })
  }

  async sauvegardeIntroAndNext(event) {
    event.preventDefault()
    this._saveIntro(event).then(() => {
      this._changeStep('addSection') //todo: ou section suivante ??
    })
  }

  async addSection(event) {
    const _value = event.currentTarget.value

    this.stepZoneTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      step: 'newSection',
      section: _value,
    })
    const response = await fetch(`${this.urlValue}?${params.toString()}`)
    this.stepZoneTarget.innerHTML = await response.text()

  }

  refreshContent(event) {
    if (event.detail.section === 'none') {
      this._changeStep('addSection')
    } else {
      this._changeStep('section', event.detail.section)
    }
  }

  async _saveIntro() {
    const form = document.getElementById('questionnaire_qualite')
    const dataForm = new FormData(form)

    const params = new URLSearchParams({
      step: 'intro',
    })

    dataForm.set('questionnaire_intro[texteExplication]', tinymce.get('questionnaire_intro_texteExplication').getContent())
    dataForm.set('questionnaire_intro[texteDebut]', tinymce.get('questionnaire_intro_texteDebut').getContent())

    const body = {
      method: 'POST',
      body: dataForm,
    }

    await fetch(`${this.urlSaveValue}?${params.toString()}`, body).then((response) => response.json()).then((data) => {
      if (data === true) {
        addCallout('Questionnaire enregistré', 'success')
      } else {
        addCallout('Erreur lors de l\'enregistrement du questionnaire', 'error')
      }
    })
  }

  async _changeStep(step, section) {
    this.stepZoneTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      step,
      section,
    })
    const response = await fetch(`${this.urlValue}?${params.toString()}`)
    this.stepZoneTarget.innerHTML = await response.text()
  }
}
