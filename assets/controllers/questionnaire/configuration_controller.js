// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/questionnaire/configuration_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 24/03/2024 17:36

import { Controller } from '@hotwired/stimulus'
import { addCallout } from '../../js/util'

export default class extends Controller {
  static targets = ['zone', 'zoneListe']

  static values = {
    url: String,
    urlSave: String,
    urlDelete: String,
    urlUpdateListe: String,
  }

  connect() {
    this._updateListe()
  }

  async addCondition(event) {
    event.preventDefault()

    this.zoneTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      typeAction: event.params.type,
    })
    const response = await fetch(`${this.urlValue}?${params.toString()}`)
    this.zoneTarget.innerHTML = await response.text()
  }

  async delete(event) {
    event.preventDefault()
    if (confirm('Voulez-vous vraiment supprimer cette condition ?')) {
      const params = new URLSearchParams({
        key: event.params.key,
      })
      await fetch(`${this.urlDeleteValue}?${params.toString()}`)
      this._updateListe()
      addCallout('Condition supprimée', 'success')
    }
  }

  async sauvegarde(event) {
    event.preventDefault()

    let body = {}
    let erreur = true

    if (event.params.typeaction === 'masquage') {
      const valeurs = []
      const questions = []
      // Sélectionne tous les éléments de type input avec un name de valeurs[]
      const checkboxes = document.querySelectorAll('input[name="valeurs[]"]')

      if (checkboxes.length > 0) {
        checkboxes.forEach((checkbox) => {
          // Vérifie si la case est cochée
          if (checkbox.checked) {
            valeurs.push(checkbox.value)
          }
        })
      } else {
        valeurs.push(document.getElementById('valeurs').value)
      }

      // Sélectionne l'élément select
      const select = document.querySelector('select[name="questions[]"]')

      // Itère sur la collection d'options
      for (let i = 0; i < select.options.length; i++) {
        // Vérifie si l'option est sélectionnée
        if (select.options[i].selected) {
          questions.push(select.options[i].value)
        }
      }

      if (valeurs.length > 0 && questions.length > 0) {
        erreur = false
        body = {
          method: 'POST',
          body: JSON.stringify({
            valeurs,
            questions,
          }),
        }
      } else {
        erreur = true
        addCallout('Veuillez sélectionner au moins une question et une valeur', 'danger')
      }
    } else {
      const question = document.getElementById('question').value
      const valeurs = document.getElementById('valeurs').value

      if (question !== '' && valeurs !== '') {
        erreur = false
        body = {
          method: 'POST',
          body: JSON.stringify({
            question,
            valeurs,
          }),
        }
      } else {
        erreur = true
        addCallout('Veuillez saisir une question et une valeur', 'danger')
      }
    }

    const params = new URLSearchParams({
      typeaction: event.params.typeAction,
    })

    if (erreur === false) {
      await fetch(`${this.urlSaveValue}?${params.toString()}`, body).then(async () => {
        this._updateListe()
      })
      addCallout('Sauvegarde effectuée', 'success')
    }
  }

  async _updateListe() {
    this.zoneListeTarget.innerHTML = window.da.loaderStimulus
    const resp = await fetch(`${this.urlUpdateListeValue}?`)
    this.zoneListeTarget.innerHTML = await resp.text()
  }
}
