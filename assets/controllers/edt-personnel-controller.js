// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/edt-personnel-controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/08/2024 09:19

import { Controller } from '@hotwired/stimulus'
import flatpickr from 'flatpickr'
import { post } from '../js/fetch'
import { addCallout } from '../js/util'
import { formatTime } from '../js/DateTime'

export default class extends Controller {
  static targets = ['etatAppel', 'zoneEdt']

  static values = {
    urlCarnetDeBord: String,
    urlPasDAbsent: String,
    urlEdt: String,
    urlEdtData: String,
    urlEdtSemestre: String,
    semaine: String,
    filtre: String,
    valeur: String,
  }

  connect() {
    this._getEdt(this.filtreValue, this.valeurValue, this.semaineValue)
  }

  affichage(e) {
    e.preventDefault()
    this._getEdt(e.params.filtre, e.params.valeur, this.semaineValue, e.params.mode)

    // changer le texte du bouton selon le mode
    e.currentTarget.innerHTML = e.params.mode === 'tableau' ? '<i class="fas fa-table"></i> Vue grille' : '<i class="fas list"></i> Vue liste'
    // changer data
    e.currentTarget.setAttribute('data-edt-personnel-mode-param', e.params.mode === 'tableau' ? 'grille' : 'tableau')
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

  async _getEdt(filtre, valeur, semaine, mode = 'grille') {
    if (filtre === 'promo') {
      this._getEdtSemestre(valeur, semaine)
    } else {
      this.zoneEdtTarget.innerHTML = window.da.loaderStimulus
      const params = new URLSearchParams({
        filtre,
        valeur,
        semaine,
        mode,
      })
      const response = await fetch(`${this.urlEdtValue}?${params.toString()}`)
      this.zoneEdtTarget.innerHTML = await response.text()
      const events = await fetch(`${this.urlEdtDataValue}?${params.toString()}`).then((resp) => resp.json())
      console.log(events)
      this._updateJs(events)
    }
  }

  _updateJs(events) {
    document.querySelectorAll('.flatdatepicker_week').forEach((elem) => {
      const options = []
      options.dateFormat = 'W'
      options.weekNumbers = true
      options.locale = da.LANG
      flatpickr(elem, options)
    })

    this._generateGrid(30)
    this._placeEvents(events, 30)
  }

  _generateGrid(slotDuration) {
    const schedule = document.getElementById('schedule')
    const startHour = 8
    const endHour = 19
    const slotsPerHour = 60 / slotDuration

    schedule.style.gridTemplateRows = `repeat(${(endHour - startHour) * slotsPerHour}, 1fr)`

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += slotDuration) {
        for (let day = 0; day < 5; day++) {
          const cell = document.createElement('div')
          cell.className = 'day-column'
          schedule.appendChild(cell)
        }
      }
    }
  }

  _placeEvents(events, slotDuration) {
    const schedule = document.getElementById('schedule')
    const slotsPerHour = 60 / slotDuration

    events.forEach((event) => {
      const start = new Date(`1970-01-01T${event.heureDebut}`)
      const end = new Date(`1970-01-01T${event.heureFin}`)
      const duration = (end - start) / (1000 * 60 * slotDuration) // Durée en créneaux de slotDuration minutes

      const startHour = start.getHours()
      const startMinute = start.getMinutes()

      const rowIndex = ((startHour - 8) * slotsPerHour + (startMinute / slotDuration)) + 1 // Index de la ligne
      const colIndex = parseInt(event.jour, 10) - 1 // Index de la colonne

      const cell = schedule.children[rowIndex * 5 + colIndex]
      cell.className = `session edt-${event.couleur} border-top-${event.couleur} ${event.typeCours.toLowerCase()}`

      cell.innerHTML = `<span class="session-time">${formatTime(start)} - ${formatTime(end)} | <span class="badge bg-edt-${event.typeCours.toLowerCase()}">${event.groupe}</span> - ${event.salle}</span><br>
        <span class="session-title">${event.display}</span><hr class="session-divider hr-${event.couleur}" />`
      cell.style.setProperty('--span', duration)

      // Sauter les créneaux horaires couverts par cet événement
      for (let i = 1; i < duration; i++) {
        const emptyCell = schedule.children[(rowIndex + i) * 5 + colIndex]
        emptyCell.style.display = 'none'
      }
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
