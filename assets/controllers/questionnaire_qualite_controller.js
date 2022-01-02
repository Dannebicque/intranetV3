// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/controllers/questionnaire_question_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 03/11/2021 17:37
import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['sections', 'selectedSection']
  static values = {
    url: String
  }

  btnHide(e) {
    this._manageSection('hide', e.currentTarget.dataset.question)
  }

  btnShow(e) {
    this._manageSection('show', e.currentTarget.dataset.question)
  }

  btnUp(e) {
    this._manageSection('up', e.currentTarget.dataset.question)
  }

  btnDown(e) {
    this._manageSection('down', e.currentTarget.dataset.question)
  }

  btnRemove(e) {
    this._manageSection('remove', e.currentTarget.dataset.question)
  }

  btnAdd() {
    this._manageSection('add', this.selectedSectionTarget.value)

  }

  async _manageSection (action, data) {
    const params = new URLSearchParams({
      action: action,
      question: data
    })
    const response = await fetch(`${this.urlValue}?${params.toString()}`)
    this.sectionsTarget.innerHTML = await response.text()
  }
}
