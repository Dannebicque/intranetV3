// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/Edt.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/08/2024 08:24

import { formatTime } from './DateTime'

const dateJour = new Date()

function _displayEtudiantCreneau(event, start, end) {
  const innerHTML = `
    <span class="session-time">${formatTime(start)} - ${formatTime(end)} | <span class="badge bg-edt-${event.typeCours.toLowerCase()}">${event.groupe}</span> - ${event.salle}</span>
        <span class="session-title">${event.display}</span>
        <hr class="session-divider hr-${event.couleur}" />
<span class="session-teacher">${event.personnel}</span>`
  return innerHTML
}

function _displayPersonnelCreneau(event, start, end) {
  const dateEvent = new Date(event.date)
  let innerHTML = `
<span class="session-time">${formatTime(start)} - ${formatTime(end)} | <span class="badge bg-edt-${event.typeCours.toLowerCase()}">${event.groupe}</span> - ${event.salle}</span>
        <span class="session-title">
<a href="${Routing.generate('application_personnel_absence_from_planning', {
    event: event.id,
    source: event.source,
    semestre: event.idSemestre,
  })}">${event.display}</a></span>
        <hr class="session-divider hr-${event.couleur}" />
        <div class="session-actions"><div class="row no-gutters">`

  if (dateEvent.getDate() > dateJour.getDate()) {
    innerHTML += `<div class="col-4 d-grid d-block">
          <button
            data-action="click->modal#openModal"
            class="btn btn-purple no-radius"
            data-size="lg"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Cahier de texte enseignant"
          >
            <i class="fas fa-book-open"></i>
          </button>
        </div>
        <div class="col-4 d-grid d-block">
          <button class="btn btn-warning no-radius"
                  data-bs-toggle="tooltip" data-bs-placement="bottom"
                  data-action="edt-personnel#btnPasAbsent"
                  data-event="{{ edt[j][ligne].getTypeIdEvent }}"
                  data-semestre="{{ edt[j][ligne].semestre.id }}"
                  title="Marquer comme Appel fait, pas d'absents"
          >
            <i class="fas fa-users-slash"></i>
          </button>
        </div>
        <div class="col-4 d-grid d-block">
          <button class="btn btn-block btn-success no-radius"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Appel réalisé"
          >
            <i class="fas fa-check"></i>
          </button>
          </div>`
  } else {
    innerHTML += `<div class="col-12 d-grid d-block"> 
                            <button class="btn btn-warning no-radius"> 
                                Evènement à venir 
                            </button> 
                        </div> `
  }

  innerHTML += '</div></div>'

  return innerHTML
}

function _placeEvents(events, slotDuration, type) {
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
    let innerHTML = ''
    if (type === 'etudiant') {
      innerHTML = _displayEtudiantCreneau(event, start, end)
    } else if (type === 'personnel') {
      innerHTML = _displayPersonnelCreneau(event, start, end)
    }

    cell.innerHTML = innerHTML

    cell.style.setProperty('--span', duration)

    // Sauter les créneaux horaires couverts par cet événement
    for (let i = 1; i < duration; i++) {
      const emptyCell = schedule.children[(rowIndex + i) * 5 + colIndex]
      emptyCell.style.display = 'none'
    }
  })
}

function _generateGrid(slotDuration) {
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

export { _placeEvents, _generateGrid }
