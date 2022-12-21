// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/plan_cours/new_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/12/2022 14:25

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['content']

  static values = {
    urlSave: String,
    urlStep: String,
    step: String,
  }

  connect() {
    this._changeStep(this.stepValue)
  }

  changeStep(event) {
    this._changeStep(event.params.step)
  }

  async _changeStep(step) {
    this.contentTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      step,
    })
    const response = await fetch(`${this.urlStepValue}?${params.toString()}`)
    this.contentTarget.innerHTML = await response.text()
  }
}
