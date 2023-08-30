// Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/questionnaire/section_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 02/08/2023 16:01

import { Controller } from '@hotwired/stimulus'
import { useDispatch } from 'stimulus-use'
import { addCallout } from '../../js/util'

export default class extends Controller {
  static targets = ['section', 'sectionEdit']

  static values = {
    urlSection: String,
  }

  connect() {
    useDispatch(this, { debug: true })
  }

  async refreshContent() {
    this.sectionTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      action: 'refreshContent',
    })
    const response = await fetch(`${this.urlSectionValue}?${params.toString()}`)
    this.sectionTarget.innerHTML = await response.text()
  }

  async edit() {
    this.sectionEditTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      action: 'edit',
    })
    const response = await fetch(`${this.urlSectionValue}?${params.toString()}`)
    this.sectionEditTarget.innerHTML = await response.text()
  }

  async sauvegarde(event) {
    const form = document.querySelectorAll('form')
    const dataForm = new FormData(form[0])

    const body = {
      method: 'POST',
      body: dataForm,
    }

    this.sectionEditTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      action: 'sauvegarde',
    })

    await fetch(`${this.urlSectionValue}?${params.toString()}`, body)
    addCallout('Section enregistrée', 'success')
    this.dispatch('updateQuestionnaire', { section: event.params.section })
  }

  async addQuestion(event) {
    const _value = event.currentTarget.value

    this.sectionTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      action: 'addQuestion',
      question: _value,
    })
    const response = await fetch(`${this.urlSectionValue}?${params.toString()}`)
    this.sectionTarget.innerHTML = await response.text()
  }

  async addQuestionTypeOrdre(event) {
    this.sectionTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      action: 'addQuestionTypeOrdre',
      type: event.params.type,
      ordre: event.params.ordre,
    })
    const response = await fetch(`${this.urlSectionValue}?${params.toString()}`)
    this.sectionTarget.innerHTML = await response.text()
  }

  async delete() {
    if (confirm('Voulez-vous vraiment supprimer cette section et toutes les questions associées ?')) {
      const params = new URLSearchParams({
        action: 'delete',
      })
      await fetch(`${this.urlSectionValue}?${params.toString()}`)
      this.dispatch('updateQuestionnaire', { section: 'none' })
    }
  }

  async left(event) {
    const params = new URLSearchParams({
      action: 'left',
    })
    await fetch(`${this.urlSectionValue}?${params.toString()}`)
    this.dispatch('updateQuestionnaire', { section: event.params.section })
  }

  async right(event) {
    const params = new URLSearchParams({
      action: 'right',
    })
    await fetch(`${this.urlSectionValue}?${params.toString()}`)
    this.dispatch('updateQuestionnaire', { section: event.params.section })
  }
}
