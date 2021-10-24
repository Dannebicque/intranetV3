// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/controllers/modal_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/10/2021 21:49

import {Controller} from 'stimulus'
import {Modal} from 'bootstrap'

export default class extends Controller {
  static targets = ['modal', 'modalBody']
  static values = {
    modalUrl: String
  }
  modal = null

  connect () {
    console.log('modal')
    console.log(self.targets)
    console.log(self.values)
  }

  openModal (event) {
    console.log(event)
    event.preventDefault()
    this.modalBodyTarget.innerHTML = 'Loading...'
    this.modal = new Modal(this.modalTarget)
    this.modal.show()

    this.modalBodyTarget.innerHTML = 'hello///'
  }

  modalHidden () {
    console.log('it was hidden!')
  }
}
