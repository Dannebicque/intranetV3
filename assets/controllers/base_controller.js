// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/controllers/modal_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/10/2021 21:49

import { Controller } from '@hotwired/stimulus'
import {Modal} from 'bootstrap'
import {addCallout} from '../js/util'

export default class extends Controller {
  static targets = ['modal', 'modalBody', 'modalTitle', 'size']
  modal = null

  submitForm (event) {
    const form = this.element.getElementsByTagName('form')[0]
    fetch(form.action, {
      method: form.method,
      body: new URLSearchParams(new FormData(form)),
    }).then(() => {
      addCallout( 'Modification effectuée','success')
    })
  }

  async openModal (event) {
    this.modalBodyTarget.innerHTML = window.da.loaderStimulus
    this.modalTitleTarget.innerHTML = event.detail.title

    if (event.detail.form === true) {
      document.getElementById('btn_modal_submit').classList.remove('d-none')
      console.log(this.element)
      this.element.getElementsByTagName('form')[0].action = event.detail.formAction
    }

    document.getElementById('stimulus_modal').classList.add('modal-' + event.detail.size)

    this.modal = new Modal(this.modalTarget)
    this.modal.show()

    const params = new URLSearchParams(event.detail.params)
    const response = await fetch(`${event.detail.url}?${params.toString()}`)
    this.modalBodyTarget.innerHTML = await response.text()

  }

  modalClose () {
    //todo: déclencher sur l'évent de Bootstrap?
    this.modalBodyTarget.innerHTML = ''
  }
}
