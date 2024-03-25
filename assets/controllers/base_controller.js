// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/base_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/02/2024 20:58

import { Controller } from '@hotwired/stimulus'
import { Modal } from 'bootstrap'
import { addCallout } from '../js/util'

export default class extends Controller {
  static targets = ['modal', 'modalBody', 'modalTitle', 'size']

  modal = null

  submitForm(event) {
    const form = this.element.getElementsByTagName('form')[0]
    let fileName;
    return fetch(form.action, {
      method: form.method,
      body: new URLSearchParams(new FormData(form)),
    })
      .then(async (response) => {
        if (response.headers.get('Content-Type') !== 'application/json' && response.headers.get('Content-Type') !== 'application/html') {
          fileName = response.headers.get('content-disposition').split('=')[1].replace('"', '').replace('"', '')

          await response.blob().then((blob) => URL.createObjectURL(blob))
            .then((url) => {
              const link = document.createElement('a')
              link.href = url
              link.download = fileName
              link.click()
              setTimeout(() => {
                // document.removeChild(link) todo: il faudrait supprimer, mais ca n'est pas a ce endroit qu'il est ajouté?
                // For Firefox it is necessary to delay revoking the ObjectURL
                window.URL.revokeObjectURL(url);
              }, 100);
            })
          addCallout('Document généré', 'success')
        } else {
          addCallout('Modification effectuée', 'success')
        }
      })
  }

  async openModal(event) {
    this.modalBodyTarget.innerHTML = window.da.loaderStimulus
    this.modalTitleTarget.innerHTML = event.detail.title

    if (event.detail.form === true) {
      document.getElementById('btn_modal_submit').classList.remove('d-none')
      this.element.getElementsByTagName('form')[0].action = event.detail.formAction
    }

    document.getElementById('stimulus_modal').classList.add(`modal-${event.detail.size}`)

    this.modal = new Modal(this.modalTarget)
    this.modal.show()

    const params = new URLSearchParams(event.detail.params)
    const response = await fetch(`${event.detail.url}?${params.toString()}`)
    this.modalBodyTarget.innerHTML = await response.text()
  }

  modalClose() {
    // todo: déclencher sur l'évent de Bootstrap?
    this.modalBodyTarget.innerHTML = ''
  }
}
