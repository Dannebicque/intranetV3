// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/questionnaire/creation_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 18/11/2022 08:54

import { Controller } from '@hotwired/stimulus'
import Routing from 'fos-router'
import { addCallout } from '../../js/util'

export default class extends Controller {
  static targets = []

  static values = {
    url: String,
    urlRedirect: String,
  }

  connect() {
    console.log('coucou')
  }

  selectAll(event) {
    event.preventDefault()
    console.log('select all')
    document.querySelectorAll('.element').forEach((elem) => {
      elem.checked = true
    })
  }

  unselectAll(event) {
    event.preventDefault()
    console.log('select all')
    document.querySelectorAll('.element').forEach((elem) => {
      elem.checked = false
    })
  }

  async sendAndClose(event) {
    event.preventDefault()
    const elts = []
    document.querySelectorAll('.element').forEach((elem) => {
      if (elem.checked) {
        elts.push(elem.value)
      }
    })
    const params = new URLSearchParams({
      action: 'send',
    })

    const body = {
      method: 'POST',
      body: JSON.stringify({ liste: elts }),
    }
    await fetch(`${this.urlValue}?${params.toString()}`, body).then((response) => response.json()).then((data) => {
      if (data === true) {
        addCallout('Questionnaire envoyé', 'success')
        document.location.href = this.urlRedirectValue
      } else {
        addCallout('Erreur lors de l\'envoi du questionnaire', 'error')
      }
    })
  }
}
