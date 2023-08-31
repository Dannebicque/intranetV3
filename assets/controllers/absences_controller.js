// Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/absences_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 31/08/2023 16:15

import { Controller } from '@hotwired/stimulus'
import Routing from 'fos-router'
import $ from 'jquery'
import { post } from '../js/fetch'
import { addCallout } from '../js/util'

export default class extends Controller {
  static values = {
    saisieDesPresents: Boolean,
    validationSaisieAbsence: Boolean,
  }

  static targets = ['listeEtudiantsAbsences']

  tabAbsences = []

  tabPresents = []

  async connect() {
    await this._updateAffichage()
  }

  pasabsent(e) {
    post(Routing.generate('app_personnel_absence_etat_appel'), {
      date: document.getElementById('absence-date').value,
      heure: document.getElementById('absence-heure').value,
      groupe: e.params.groupe,
      matiere: document.getElementById('absence-matiere').value,
    })
      .then((data) => {
        // Handle data
        if (data === true) {
          e.target.textContent = 'Vous avez indiqué qu\'il n\'y a pas d\'absent dans ce groupe.'
          addCallout('Saisie enregistée avec succès.', 'success')
        } else {
          addCallout('Vous avez déjà effectué une saisie.', 'warning')
        }
      }).catch(() => {
      // Handle error
        addCallout('Erreur lors de l\'enregistrement.', 'error')
      })
  }

  async absChangeTypeGroupe(e) {
    e.preventDefault()
    e.stopPropagation()

    document.querySelectorAll('.absChangeTypeGroupe').forEach((btn) => {
      btn.classList.remove('btn-primary')
    })

    e.currentTarget.classList.add('btn-primary')

    this.listeEtudiantsAbsencesTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(Routing.generate('api_absence_liste_etudiant', { typegroupe: e.params.typegroupe }))
    if (response.ok) {
      this.listeEtudiantsAbsencesTarget.innerHTML = await response.text()
      await this._updateAffichage()
    }
  }

  async _updateAffichage() {
    const date = document.getElementById('absence-date').value
    let heure = document.getElementById('absence-heure').value
    const absenceMatiere = document.getElementById('absence-matiere').value

    const buttons = document.querySelectorAll('.pasabsent')
    buttons.forEach((btn) => {
      btn.disabled = false
    })

    await fetch(Routing.generate('application_personnel_absence_get_ajax', { matiere: absenceMatiere }), {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        if (heure.length === 4) {
          heure = `0${heure}`
        }

        let hasAbsence = false
        const tAbsences = data.absences

        Object.entries(tAbsences).forEach(([d, tAbsence]) => {
          if (d === date && typeof tAbsence[heure] !== 'undefined') {
            tAbsence[heure].forEach((abs) => {
              if (document.querySelector(`#etu_${abs}`)) {
                document.querySelector(`#etu_${abs}`).classList.add('absent')
                hasAbsence = true
              }
            })
          }
        })

        if (hasAbsence) {
          document.querySelectorAll('.pasabsent').forEach((btn) => {
            btn.disabled = true
          })
        } else {
          const tAppel = data.etatAppel

          Object.entries(tAppel).forEach(([a, etatAppel]) => {
            if (a === date && etatAppel[heure] !== 'undefined') {
              etatAppel[heure].forEach((appel) => {
                const appelButton = Array.from(buttons).find((btn) => btn.dataset.groupe === appel)
                if (appelButton) appelButton.disabled = true
              })
            }
          })
        }
      })
      .catch((error) => addCallout(`Error: ${error}`, 'danger'))
  }

  async changeMatiere() {
    this._clearAbsences()
    document.getElementById('text-matiere').innerText = $(this).find(':selected').text().trim()
    await this._updateAffichage()
  }

  async changeDate() {
    this._clearAbsences()
    await this._updateAffichage()
  }

  async changeHeure() {
    this._clearAbsences()
    await this._updateAffichage()
  }

  _clearAbsences() {
    const etudiants = document.querySelectorAll('.etudiant')
    etudiants.forEach((etudiant) => {
      etudiant.classList.remove('absent')
    })
  }

  etudiantPresent(event) {
    this.tabPresents.push(event.currentTarget.id)
    event.currentTarget.classList.toggle('present')
    console.log(this.tabPresents)
  }

  etudiantPreAbsent(event) {
    this.tabAbsences.push(event.currentTarget.id)
    event.currentTarget.classList.toggle('absent')
    console.log(this.tabAbsences)
  }

  etudiantAbsent(event) {
    const heure = document.getElementById('absence-heure').value
    const duree = document.getElementById('absence-duree').value
    const date = document.getElementById('absence-date').value
    const matiere = document.getElementById('absence-matiere').value

    if (heure === '') {
      alert('Veuillez saisir une heure')
    } else {
      const $split = event.currentTarget.id.split('_')
      const etudiant = $split[1]
      if (event.currentTarget.classList.contains('absent')) {
        // supprimer absence
        event.currentTarget.classList.remove('absent')

        const url = Routing.generate('application_personnel_absence_saisie_ajax', { matiere, etudiant })

        const data = new FormData()
        data.append('date', date)
        data.append('duree', duree)
        data.append('heure', heure)
        data.append('action', 'suppr')

        fetch(url, {
          method: 'POST',
          body: data,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json()
          })
          .then((data) => {
            this.tabsences = data
            addCallout('La suppression a été effectuée avec succés !', 'success')
          })
          .catch(() => {
            addCallout('Erreur lors de la tentative de suppression de l\'absence !', 'danger')
          })
      } else {
        // marquer comme absent
        event.currentTarget.classList.add('absent')
        const url = Routing.generate('application_personnel_absence_saisie_ajax', { matiere, etudiant })

        const data = new FormData()

        data.append('date', date)
        data.append('duree', duree)
        data.append('heure', heure)
        data.append('action', 'saisie')

        fetch(url, {
          method: 'POST',
          body: data,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json()
          })
          .then(() => {
            addCallout('Absence enregistrée avec succés !', 'success')
          })
          .catch((error) => {
            if (error.message === 'out') {
              addCallout('Le délai pour l\'enregistrement est dépassé. Contactez le responsable de la department', 'danger')
            } else {
              addCallout('Erreur lors de l\'enregistrement.', 'danger')
            }
          })
      }
    }
  }
}
