// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/controllers/questionnaire_question_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 03/11/2021 17:37
import {Controller} from 'stimulus'

export default class extends Controller {
  static targets = ['questions', 'selectedQuestion']
  static values = {
    url: String
  }

  connect () {
    console.log('coucou')
  }

  btnHide(e) {
    this._manageQuestion('hide', e.currentTarget.dataset.question)
  }

  btnUp(e) {
    this._manageQuestion('up', e.currentTarget.dataset.question)
  }

  btnDown(e) {
    this._manageQuestion('down', e.currentTarget.dataset.question)
  }

  btnRemove(e) {
    this._manageQuestion('remove', e.currentTarget.dataset.question)
  }

  btnShow(e) {
    this._manageSection('show', e.currentTarget.dataset.question)
  }

  btnAdd() {
    console.log(this.selectedQuestionTarget.value)
    this._manageQuestion('add', this.selectedQuestionTarget.value)

  }

  async _manageQuestion (action, data) {
    const params = new URLSearchParams({
      action: action,
      question: data
    })
    const response = await fetch(`${this.urlValue}?${params.toString()}`)
    this.questionsTarget.innerHTML = await response.text()
  }
}
