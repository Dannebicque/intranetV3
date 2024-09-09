// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/adm/previsionnel_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 09/09/2024 15:25

import { Controller } from '@hotwired/stimulus'
import { addCallout } from '../../js/util'

export default class extends Controller {
  static targets = ['content', 'contentAdd']

  static values = {
    url: String,
    urlChangeMatiere: String,
    urlAddPersonnel: String,
    urlChangePersonnel: String,
    urlChangeSemestre: String,
    urlAddMatiere: String,
    urlAddPrime: String,
    urlChangeSynthesePersonnel: String,
    urlChangeSyntheseSemestre: String,
    urlChangeSyntheseHrs: String,
  }

  connect() {
    this._updateContent('matiere')
  }

  changeType(e) {
    this._updateContent(e.params.type)
  }

  async _updateContent(type) {
    const params = new URLSearchParams({
      type,
    })

    await fetch(`${this.urlValue}?${params.toString()}`, {}).then((response) => response.text()).then((html) => {
      this.contentTarget.innerHTML = html
    }).then(() => {
      if (type === 'synthese-personnel' || type === 'synthese-hrs') {
        this._loadContent(type, { annee: document.getElementById('previ_annee_previsionnel').value })
      }
    })
  }

  async changeData(e) {
    const body = new FormData()
    body.append('field', e.params.field)
    body.append('valeur', e.currentTarget.value)

    const { type } = e.params

    await fetch(e.params.url, {
      method: 'POST',
      body,
    }).then(() => {
      addCallout('Donnée modifiée', 'success')
      this._loadContent(type, e.params)
    })
  }

  actualiser(e) {
    const { type } = e.params
    let params = {}
    if (type === 'personnel') {
      params = {
        annee: document.getElementById('previ_annee_previsionnel').value,
        personnel: document.getElementById('previ_personnel').value,
      }
    } else if (type === 'semestre') {
      params = {
        annee: document.getElementById('previ_annee_previsionnel').value,
        semestre: document.getElementById('previ_semestre').value,
      }
    } else if (type === 'matiere') {
      params = {
        annee: document.getElementById('previ_annee_previsionnel').value,
        matiere: document.getElementById('previ_matiere').value,
      }
    } else if (type === 'synthese-personnel') {
      params = {
        annee: document.getElementById('previ_annee_previsionnel').value,
      }
    } else if (type === 'synthese-semestre') {
      params = {
        semestre: document.getElementById('previ_semestre').value,
        annee: document.getElementById('previ_annee_previsionnel').value,
      }
    } else {
      addCallout('Type de prévisionnel inconnu', 'danger')
      return false
    }
    addCallout('Donnée actualisée', 'success')
    this._loadContent(type, params)

    return true
  }

  async changePrime(e) {
    const body = new FormData()
    body.append('field', e.params.field)
    body.append('valeur', e.currentTarget.value)

    await fetch(e.params.url, {
      method: 'POST',
      body,
    }).then(() => {
      addCallout('Donnée modifiée', 'success')
      this._loadContent('personnel', e.params)
    })
  }

  async changeSyntheseHrs(e) {
    const body = new FormData()
    body.append('field', e.params.field)
    body.append('valeur', e.currentTarget.value)

    await fetch(e.params.url, {
      method: 'POST',
      body,
    }).then(() => {
      addCallout('Donnée modifiée', 'success')
      this._loadContent('synthese-hrs', e.params)
    })
  }

  async changePersonnel(e) {
    const body = new FormData()
    body.append('valeur', e.currentTarget.value)

    const { matiere } = e.params
    const { annee } = e.params
    const params = new URLSearchParams({
      annee,
      matiere,
    })

    await fetch(e.params.url, {
      method: 'POST',
      body,
    }).then(() => {
      addCallout('Intervenant modifié', 'success')
      this._updateMatiere(params)
    })
  }

  async supprIntervenant(e) {
    e.preventDefault()
    if (confirm('Etes vous sur de vouloir supprimer cet intervenant du prévisionnel')) { // todo: utiliser swal ? Si pas de jquery dedans
      // body avec le CSRF
      const { type } = e.params

      await fetch(e.currentTarget.href, {
        method: 'DELETE',
        headers: {
          'X-CSRF-TOKEN': e.currentTarget.dataset.csrf,
        },
      }).then(() => {
        addCallout('Intervenant supprimé', 'success')
        this._loadContent(type, e.params)
      })
    }
  }

  async supprPrime(e) {
    e.preventDefault()
    if (confirm('Etes vous sur de vouloir supprimer cette prime du prévisionnel')) { // todo: utiliser swal ? Si pas de jquery dedans
      // body avec le CSRF

      await fetch(e.currentTarget.href, {
        method: 'DELETE',
        headers: {
          'X-CSRF-TOKEN': e.currentTarget.dataset.csrf,
        },
      }).then(() => {
        addCallout('Prime supprimée', 'success')
        this._loadContent('personnel', e.params)
      })
    }
  }

  async dupliquer(e) {
    e.preventDefault()
    // body avec le CSRF
    const { type } = e.params

    await fetch(e.currentTarget.href).then(() => {
      addCallout('Ligne de prévisionnel dupliquée', 'success')
      this._loadContent(type, e.params)
    })
  }

  async dupliquerPrime(e) {
    e.preventDefault()

    await fetch(e.currentTarget.href).then(() => {
      addCallout('Ligne de prime dupliquée', 'success')
      this._loadContent('personnel', e.params)
    })
  }

  async ajoutIntervenant(e) {
    const intervenant = document.getElementById('addPersonnel').value
    if (intervenant !== '') {
      // fetch pour l'ajouter et refresh
      const { matiere } = e.params
      const { annee } = e.params

      const body = new FormData()
      body.append('matiere', matiere)
      body.append('annee', annee)
      body.append('intervenant', intervenant)

      await fetch(this.urlAddPersonnelValue, {
        method: 'POST',
        body,
      })
      const params = new URLSearchParams({
        annee,
        matiere,
      })
      this._updateMatiere(params)
    } else {
      alert('Veuillez sélectionner un intervenant')
    }
  }

  async ajoutMatiere(e) {
    const matiere = document.getElementById('addMatiere').value
    if (matiere !== '') {
      // fetch pour l'ajouter et refresh
      const { personnel } = e.params
      const { annee } = e.params

      const body = new FormData()
      body.append('matiere', matiere)
      body.append('annee', annee)
      body.append('intervenant', personnel)

      await fetch(this.urlAddMatiereValue, {
        method: 'POST',
        body,
      })
      const params = new URLSearchParams({
        annee,
        personnel,
      })
      this._updatePersonnel(params)
    } else {
      alert('Veuillez sélectionner une matière')
    }
  }

  async ajoutMatierePersonnel(e) {
    const matiere = document.getElementById('addMatiere').value
    const intervenant = document.getElementById('addPersonnel').value
    if (matiere !== '' && intervenant !== '') {
      // fetch pour l'ajouter et refresh
      const { annee } = e.params
      const { semestre } = e.params

      const body = new FormData()
      body.append('matiere', matiere)
      body.append('annee', annee)
      body.append('semestre', semestre)
      body.append('intervenant', intervenant)

      await fetch(this.urlAddMatiereValue, {
        method: 'POST',
        body,
      })
      const params = new URLSearchParams({
        annee,
        semestre,
      })
      this._updateSemestre(params)
    } else {
      alert('Veuillez sélectionner une matière et un intervenant')
    }
  }

  async ajoutPrime(e) {
    // fetch pour l'ajouter et refresh
    const { personnel } = e.params
    const { annee } = e.params

    const body = new FormData()
    body.append('personnel', personnel)
    body.append('annee', annee)

    await fetch(this.urlAddPrimeValue, {
      method: 'POST',
      body,
    })
    const params = new URLSearchParams({
      annee,
      personnel,
    })
    await this._updatePersonnel(params)
  }

  async changeShowMatiere(e) {
    const params = new URLSearchParams({
      matiere: e.target.value,
      annee: document.getElementById('previ_annee_previsionnel').value,
    })

    await this._updateMatiere(params)
  }

  async changeShowSemestre(e) {
    const params = new URLSearchParams({
      semestre: e.target.value,
      annee: document.getElementById('previ_annee_previsionnel').value,
    })

    await this._updateSemestre(params)
  }

  async changeShowPersonnel(e) {
    const params = new URLSearchParams({
      personnel: e.target.value,
      annee: document.getElementById('previ_annee_previsionnel').value,
    })

    await this._updatePersonnel(params)
  }

  async changeAnneePersonnel(e) {
    const params = new URLSearchParams({
      annee: e.target.value,
      personnel: document.getElementById('previ_personnel').value,
    })

    await this._updatePersonnel(params)
  }

  async changeAnneeMatiere(e) {
    const params = new URLSearchParams({
      annee: e.target.value,
      matiere: document.getElementById('previ_matiere').value,
    })

    await this._updateMatiere(params)
  }

  async changeAnneeSemestre(e) {
    const params = new URLSearchParams({
      annee: e.target.value,
      semestre: document.getElementById('previ_semestre').value,
    })

    await this._updateSemestre(params)
  }

  async changeAnneeSynthesePersonnel(e) {
    const params = new URLSearchParams({
      annee: e.target.value,
    })

    this._updateSynthesePersonnel(params)
  }

  async changeAnneeSyntheseSemestre(e) {
    const params = new URLSearchParams({
      annee: e.target.value,
      semestre: document.getElementById('previ_semestre').value,
    })

    this._updateSyntheseSemestre(params)
  }

  async changeSemestreSyntheseSemestre(e) {
    const params = new URLSearchParams({
      semestre: e.target.value,
      annee: document.getElementById('previ_annee_previsionnel').value,
    })

    this._updateSyntheseSemestre(params)
  }

  async _updateMatiere(params) {
    this.contentAddTarget.innerHTML = window.da.loaderStimulus
    await fetch(`${this.urlChangeMatiereValue}?${params.toString()}`, {}).then((response) => response.text()).then((html) => {
      this.contentAddTarget.innerHTML = html !== 'false' ? html : ''
    })
  }

  async _updateSynthesePersonnel(params) {
    this.contentAddTarget.innerHTML = window.da.loaderStimulus
    await fetch(`${this.urlChangeSynthesePersonnelValue}?${params.toString()}`, {}).then((response) => response.text()).then((html) => {
      this.contentAddTarget.innerHTML = html !== 'false' ? html : ''
    })
  }

  async _updateSyntheseSemestre(params) {
    this.contentAddTarget.innerHTML = window.da.loaderStimulus
    await fetch(`${this.urlChangeSyntheseSemestreValue}?${params.toString()}`, {}).then((response) => response.text()).then((html) => {
      this.contentAddTarget.innerHTML = html !== 'false' ? html : ''
    })
  }

  async _updateSyntheseHrs(params) {
    this.contentAddTarget.innerHTML = window.da.loaderStimulus
    await fetch(`${this.urlChangeSyntheseHrsValue}?${params.toString()}`, {}).then((response) => response.text()).then((html) => {
      this.contentAddTarget.innerHTML = html !== 'false' ? html : ''
    })
  }

  async _updatePersonnel(params) {
    this.contentAddTarget.innerHTML = window.da.loaderStimulus
    await fetch(`${this.urlChangePersonnelValue}?${params.toString()}`, {}).then((response) => response.text()).then((html) => {
      this.contentAddTarget.innerHTML = html !== 'false' ? html : ''
    })
  }

  async _updateSemestre(params) {
    this.contentAddTarget.innerHTML = window.da.loaderStimulus
    await fetch(`${this.urlChangeSemestreValue}?${params.toString()}`, {}).then((response) => response.text()).then((html) => {
      this.contentAddTarget.innerHTML = html !== 'false' ? html : ''
    })
  }

  _loadContent(type, eparams) {
    if (type === 'matiere') {
      const { matiere } = eparams
      const { annee } = eparams

      if (matiere === '' || annee === '') {
        addCallout('Veuillez sélectionner une matière et une année', 'danger')
        return false
      }

      const params = new URLSearchParams({
        annee,
        matiere,
      })
      this._updateMatiere(params)
    } else if (type === 'personnel') {
      const { personnel } = eparams
      const { annee } = eparams

      if (personnel === '' || annee === '') {
        addCallout('Veuillez sélectionner un personnel et une année', 'danger')
        return false
      }

      const params = new URLSearchParams({
        annee,
        personnel,
      })
      this._updatePersonnel(params)
    } else if (type === 'synthese-semestre') {
      const { semestre } = eparams
      const { annee } = eparams

      if (semestre === '' || annee === '') {
        addCallout('Veuillez sélectionner un semestre et une année', 'danger')
        return false
      }

      const params = new URLSearchParams({
        annee,
        semestre,
      })
      this._updateSyntheseSemestre(params)
    } else if (type === 'synthese-personnel') {
      const { annee } = eparams

      if (annee === '') {
        addCallout('Veuillez sélectionner une année', 'danger')
        return false
      }

      const params = new URLSearchParams({
        annee,
      })
      this._updateSynthesePersonnel(params)
    } else if (type === 'semestre') {
      const { semestre } = eparams
      const { annee } = eparams

      if (semestre === '' || annee === '') {
        addCallout('Veuillez sélectionner un semestre et une année', 'danger')
        return false
      }

      const params = new URLSearchParams({
        annee,
        semestre,
      })
      this._updateSemestre(params)
    } else if (type === 'synthese-hrs') {
      const { annee } = eparams

      if (annee === '') {
        addCallout('Veuillez sélectionner une année', 'danger')
        return false
      }

      const params = new URLSearchParams({
        annee,
      })
      this._updateSyntheseHrs(params)
    } else {
      addCallout('Type de prévisionnel inconnu', 'danger')
    }
  }
}
