// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/trombinoscope_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/08/2024 19:12

import { Controller } from '@hotwired/stimulus'
import { useDebounce } from 'stimulus-use'

export default class extends Controller {
  static targets = ['content']

  static debounces = ['recherche']

  static values = {
    url: String,
    urlGroupe: String,
    type: String,
  }

  connect() {
    useDebounce(this, { wait: 500 })
    this.load()
  }

  async load() {
    this.contentTarget.innerHTML = window.da.loaderStimulus
    const params = new FormData()

    if (this.typeValue === 'etudiant') {
      params.append('semestre', document.getElementById('semestre').value)
      params.append('typegroupe', document.getElementById('typegroupe').value)
      params.append('groupe', document.getElementById('groupe').value)
      params.append('recherche', document.getElementById('rechercher').value)
    } else {
      params.append('recherche', document.getElementById('rechercher').value)
    }

    const response = await fetch(this.urlValue, {
      method: 'POST',
      body: params,
    })
    this.contentTarget.innerHTML = await response.text()
  }

  async recherche() {
    this.load()
  }

  async changeTypeGroupe(event) {
    document.getElementById('groupe').value = ''
    this.loadGroupes(event.currentTarget.value)
    this.load()
  }

  cleanFiltre() {
    document.getElementById('rechercher').value = ''
    const groupe = document.getElementById('groupe')
    groupe.innerHTML = ''
    const optVide = document.createElement('option')
    optVide.value = ''
    optVide.text = 'Choisir un type de groupe'
    groupe.add(optVide)
    document.getElementById('typegroupe').value = ''
    this.load()
  }

  async changeGroupe() {
    this.load()
  }

  async loadGroupes(idTypeGroupe) {
    const params = new FormData()
    params.append('typegroupe', idTypeGroupe)
    params.append('semestre', document.getElementById('semestre').value)

    const response = await fetch(this.urlGroupeValue, {
      method: 'POST',
      body: params,
    }).then((rep) => rep.json())
    const select = document.getElementById('groupe')
    select.innerHTML = ''
    const optVide = document.createElement('option')
    optVide.value = ''
    optVide.text = 'Choisir un groupe'
    select.add(optVide)

    response.forEach((item) => {
      const option = document.createElement('option')
      option.value = item.id
      option.text = item.libelle
      select.add(option)
    })
  }

  // async changementSemestre(event) {
  //   await this._trombiSemestre(event.currentTarget)
  // }
  //
  // async changementPersonnel(event) {
  //   await this._trombiPersonnel(event.currentTarget)
  // }
  //
  // async changementTypegroupe(event) {
  //   await this._trombiTypeGroupe(event.currentTarget)
  // }
  //
  // async _trombiPersonnel(el) {
  //   this.contentSemestreTarget.innerHTML = window.da.loaderStimulus
  //   const response = await fetch(Routing.generate('trombinoscope_personnel', { type: el.dataset.type }))
  //   this.contentSemestreTarget.innerHTML = await response.text()
  // }
  //
  // async _trombiTypeGroupe(el) {
  //   this.contentSemestreTarget.innerHTML = window.da.loaderStimulus
  //   const response = await fetch(Routing.generate('trombinoscope_etudiant_semestre_type_groupe', {
  //     semestre: el.dataset.semestre,
  //     typegroupe: el.dataset.typegroupe,
  //   }))
  //   this.contentSemestreTarget.innerHTML = await response.text()
  // }
  //
  // async _trombiSemestre(el) {
  //   this.contentSemestreTarget.innerHTML = window.da.loaderStimulus
  //   const response = await fetch(Routing.generate('trombinoscope_etudiant_semestre', { semestre: el.dataset.sem }))
  //   this.contentSemestreTarget.innerHTML = await response.text()
  // }
}
