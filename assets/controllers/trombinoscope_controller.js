// Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/trombinoscope_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 31/08/2026 11:40

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['contentSemestre']

  async changementSemestre(event) {
    await this._trombiSemestre(event.currentTarget)
  }

  async changementPersonnel(event) {
    await this._trombiPersonnel(event.currentTarget)
  }

  async changementTypegroupe(event) {
    await this._trombiTypeGroupe(event.currentTarget)
  }

  async deleteGroupe (event) {
    if (confirm('Voulez-vous vraiment supprimer ce groupe ?')) {
      const el = event.currentTarget
      const response = await fetch(Routing.generate('trombinoscope_groupe_delete', { id: el.dataset.id }), {
        method: 'POST'
      })

      if (response.ok) {
        const id = el.dataset.id
        const pane = document.getElementById('groupe_' + id)
        pane.remove()
        const navLink = document.querySelector('a[href="#groupe_' + id + '"]')
        if (navLink) {
          navLink.parentElement.remove()
        }
      } else {
        alert('Erreur lors de la suppression')
      }
    }
  }

  async removeStudentFromGroup (event) {
    if (confirm('Voulez-vous vraiment retirer cet étudiant de ce groupe ?')) {
      const el = event.currentTarget
      const response = await fetch(Routing.generate('trombinoscope_etudiant_groupe_remove', {
        etudiant: el.dataset.etudiant,
        groupe: el.dataset.groupe
      }), {
        method: 'POST'
      })

      if (response.ok) {
        el.parentElement.remove()
      } else {
        alert('Erreur lors du retrait de l\'étudiant')
      }
    }
  }

  async _trombiPersonnel(el) {
    this.contentSemestreTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(Routing.generate('trombinoscope_personnel', { type: el.dataset.type }))
    this.contentSemestreTarget.innerHTML = await response.text()
  }

  async _trombiTypeGroupe(el) {
    this.contentSemestreTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(Routing.generate('trombinoscope_etudiant_semestre_type_groupe', {
      semestre: el.dataset.semestre,
      typegroupe: el.dataset.typegroupe,
    }))
    this.contentSemestreTarget.innerHTML = await response.text()
  }

  async _trombiSemestre(el) {
    this.contentSemestreTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(Routing.generate('trombinoscope_etudiant_semestre', { semestre: el.dataset.sem }))
    this.contentSemestreTarget.innerHTML = await response.text()
  }
}
