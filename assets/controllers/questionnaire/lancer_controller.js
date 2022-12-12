// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/questionnaire/lancer_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/12/2022 21:28

import { Controller } from '@hotwired/stimulus'
import { addCallout } from '../../js/util'

export default class extends Controller {
  static targets = [
    'listeExt',
  ]

  static values = {
    url: String,
    urlExt: String,
    urlRedirect: String,
  }

  connect() {
  }

  async ajouterExt(event) {
    event.preventDefault()
    console.log('add')

    const body = {
      method: 'POST',
      body: JSON.stringify({
        nom: document.getElementById('ext_nom').value,
        prenom: document.getElementById('ext_prenom').value,
        email: document.getElementById('ext_email').value,
      }),
    }
    await fetch(`${this.urlExtValue}`, body).then(async (response) => {
      addCallout('Extérieur ajouté', 'success')
      this.listeExtTarget.innerHTML = await response.text()
    })
      .catch(() => {
        addCallout('Erreur lors de l\'ajout de la personne extérieure', 'error')
      })
  }

  selectAll(event) {
    event.preventDefault()
    document.querySelectorAll('.element').forEach((elem) => {
      elem.checked = true
    })
  }

  unselectAll(event) {
    event.preventDefault()
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
