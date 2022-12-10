// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/questionnaire/section_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/11/2022 17:35

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

  async refreshContent(event) {
    this.sectionTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      action: 'refreshContent',
    })
    const response = await fetch(`${this.urlSectionValue}?${params.toString()}`)
    this.sectionTarget.innerHTML = await response.text()
  }

  async edit(event) {
    this.sectionEditTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      action: 'edit',
    })
    const response = await fetch(`${this.urlSectionValue}?${params.toString()}`)
    this.sectionEditTarget.innerHTML = await response.text()
  }

  async sauvegarde(event) {
    console.log('sauvegarde')
    const form = document.querySelectorAll('form')
    const dataForm = new FormData(form[0])

    const body = {
      method: 'POST',
      body: dataForm,
    }

    console.log(dataForm)
    this.sectionEditTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      action: 'sauvegarde',
    })

    const response = await fetch(`${this.urlSectionValue}?${params.toString()}`, body)
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

  async delete(event) {
    const params = new URLSearchParams({
      action: 'delete',
    })
    await fetch(`${this.urlSectionValue}?${params.toString()}`)
    this.dispatch('updateQuestionnaire', { section: 'none' })
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
