// Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/wizard_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/07/2023 15:37

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['page']

  static values = {
    url: String,
    step: Number,
    maxStep: Number,
    questionnaire: String,
    etudiant: String,
  }

  prevButton = document.getElementById('prev-button')

  nextButton = document.getElementById('next-button')

  finishButton = document.getElementById('finish-button')

  connect() {
    this._getPage()
    this._updateButton()
  }

  prev(e) {
    e.preventDefault()
    this.stepValue--
    this._getPage()
    this._updateButton()
  }

  next(e) {
    e.preventDefault()
    this.stepValue++
    this._getPage()
    this._updateButton()
  }

  step(event) {
    const target = event.currentTarget
    this.stepValue = target.dataset.step
    this._getPage()
    this._updateButton()
  }

  _updateButton() {
    this.finishButton.classList.add('d-none')
    this.nextButton.classList.remove('d-none')

    if (this.stepValue === 1) {
      this.prevButton.classList.add('disabled')
    } else {
      this.prevButton.classList.remove('disabled')
    }

    if (this.stepValue === this.maxStepValue) {
      this.nextButton.classList.add('d-none')
      this.finishButton.classList.remove('d-none')
    } else {
      this.nextButton.classList.remove('disabled')
      this.nextButton.classList.remove('d-none')
    }

    document.querySelectorAll('.nav-item').forEach((elem) => {
      if (parseInt(elem.dataset.step) === parseInt(this.stepValue)) {
        elem.classList.add('processing')
      } else if (parseInt(elem.dataset.step) < parseInt(this.stepValue)) {
        elem.classList.remove('processing')
        elem.classList.add('complete')
      } else {
        elem.classList.remove('processing')
        elem.classList.remove('complete')
      }
    })
  }

  async _getPage() {
    this.pageTarget.innerHTML = window.da.loaderStimulus
    const myHeaders = new Headers()

    const myInit = {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
    };

    const params = new URLSearchParams({
      page: this.stepValue,
      questionnaire: this.questionnaireValue,
      etudiant: this.etudiantValue,
    })
    const response = await fetch(`${this.urlValue}?${params.toString()}`, myInit)
    this.pageTarget.innerHTML = await response.text()
  }
}
