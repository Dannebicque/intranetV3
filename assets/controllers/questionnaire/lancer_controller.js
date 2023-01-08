// Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/questionnaire/lancer_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/01/2023 23:01

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

  async ajouterExt(event) {
    event.preventDefault()
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

  async saveDate(event) {
    event.preventDefault()

    const params = new URLSearchParams({
      action: 'saveDate',
    })

    const body = {
      method: 'POST',
      body: JSON.stringify({ type: event.params.type, date: event.currentTarget.value }),
    }
    await fetch(`${this.urlValue}?${params.toString()}`, body).then((response) => response.json()).then((data) => {
      if (data.save === true) {
        addCallout('Date Sauvegardée', 'success')
        if (data.autorise === true) {
          document.getElementById('btnSaveAndSend').removeAttribute('disabled')
          document.getElementById('alertSend').style.display = 'none'
        }
      } else {
        addCallout('Erreur lors de la sauvegarde', 'error')
      }
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
