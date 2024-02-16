// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/edt-personnel-controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/02/2024 16:01

import { Controller } from '@hotwired/stimulus'
import flatpickr from 'flatpickr'
import { post } from '../js/fetch'
import { addCallout } from '../js/util'

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

  changeJour(e) {
    e.preventDefault()
    let { jour } = e.params
    let afficheJour = jour
    let jourSuivant = parseInt(jour, 10) + 1
    let jourPrecedent = parseInt(jour, 10) - 1
    if (jour <= 0) {
      jour = 1
      afficheJour = 5
      jourPrecedent = 5
      jourSuivant = 1
    }

    if (jour > 5) {
      jour = 5
      afficheJour = 1
      jourPrecedent = 5
      jourSuivant = 2
    }

    document.querySelectorAll('.jourEdt').forEach((elem) => {
      elem.style.display = 'none'
    })

    document.getElementById(`jour${afficheJour}`).style.display = 'block'

    // mettre à jour l'attribut dans les liens
    document.getElementById('jourPrecedentPersonnel').setAttribute('data-edt-personnel-jour-param', jourPrecedent)
    document.getElementById('jourSuivantPersonnel').setAttribute('data-edt-personnel-jour-param', jourSuivant)
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
      const options = []
      options.dateFormat = 'W'
      options.weekNumbers = true
      options.locale = da.LANG
      flatpickr(elem, options)
    })
  }

  btnPasAbsent(e) {
    e.preventDefault()
    const { event } = e.currentTarget.dataset
    const btn = e.currentTarget

    post(this.urlPasDAbsentValue, { event, semestre: btn.dataset.semestre }).then((data) => {
      if (data === true) {
        const element = document.getElementById(`pointage${event}`)
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
