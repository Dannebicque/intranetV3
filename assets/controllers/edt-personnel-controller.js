// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/edt-personnel-controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/11/2022 20:44

import { Controller } from '@hotwired/stimulus'
import { post } from '../js/fetch'
import { addCallout } from '../js/util'
import flatpickr from 'flatpickr'

export default class extends Controller {
  static targets = ['etatAppel', 'zoneEdt']

  static values = {
    urlCarnetDeBord: String,
    urlPasDAbsent: String,
    urlEdt: String,
    urlEdtSemestre: String,
    semaine: String,
    filtre: String,
    valeur: String,
  }

  connect() {
    this._getEdt(this.filtreValue, this.valeurValue, this.semaineValue)
  }

  changeWeek(e) {
    e.preventDefault()
    this.semaineValue = e.currentTarget.value
    this._getEdt(e.params.filtre, e.params.valeur, this.semaineValue)
  }

  changeSemaine(e) {
    e.preventDefault()
    this.semaineValue = e.params.semaine
    this.valeurValue = e.params.valeur
    this.filtreValue = e.params.filtre
    this._getEdt(this.filtreValue, this.valeurValue, this.semaineValue)
  }

  async _getEdtSemestre(valeur, semaine) {
    this.zoneEdtTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      valeur,
      semaine,
    })
    const response = await fetch(`${this.urlEdtSemestreValue}?${params.toString()}`)
    this.zoneEdtTarget.innerHTML = await response.text()
    this._updateJs()
  }

  async _getEdt(filtre, valeur, semaine) {
    if (filtre === 'promo') {
      this._getEdtSemestre(valeur, semaine)
    } else {
      this.zoneEdtTarget.innerHTML = window.da.loaderStimulus
      const params = new URLSearchParams({
        filtre,
        valeur,
        semaine,
      })
      const response = await fetch(`${this.urlEdtValue}?${params.toString()}`)
      this.zoneEdtTarget.innerHTML = await response.text()
      this._updateJs()
    }

  }

  _updateJs() {
    document.querySelectorAll('.flatdatepicker_week').forEach((elem) => {
      let options = []
      options.dateFormat = 'W'
      options.weekNumbers = true
      options.locale = da.LANG
      flatpickr(elem, options)
    })
  }

  btnPasAbsent(e) {
    e.preventDefault()
    const event = e.currentTarget.dataset.event
    const btn = e.currentTarget

    post(this.urlPasDAbsentValue, { event: event, semestre: btn.dataset.semestre }).then((data) => {
      if (data === true) {
        const element = document.getElementById('pointage' + event)
        btn.disabled = true
        element.classList.remove('btn-danger')
        element.firstElementChild.classList.remove('fa-times')
        element.firstElementChild.classList.add('fa-check')
        element.classList.add('btn-success')
        addCallout('Pas d\'absence enregistrée', 'success')
      } else {
        addCallout('Erreur lors de l\'enregistrement de l\'absence', 'danger')
      }
    })
  }

  btnCahierTexte(e) {
    e.preventDefault()
    // ouvrir modal avec données du créneau + zone de saisie, pré-rempli si déjà existante.
  }
}
