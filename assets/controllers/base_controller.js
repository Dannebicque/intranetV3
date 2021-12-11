// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/controllers/modal_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/10/2021 21:49

import {Controller} from 'stimulus'
import {Modal} from 'bootstrap'

export default class extends Controller {
  static targets = ['modal', 'modalBody', 'modalTitle', 'size']
  modal = null

  async openModal (event) {
    this.modalBodyTarget.innerHTML = '... Chargement en cours ...'
    this.modalTitleTarget.innerHTML = event.detail.title

    document.getElementById('stimulus_modal').classList.add('modal-' + event.detail.size) //todo: gérer valeur par défaut

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
