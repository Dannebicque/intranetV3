// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/inPlaceEdit.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 24/11/2022 19:15

import { Popover } from 'bootstrap'
import { addCallout } from './util'

// in place editor
export default class InPlaceEdit {
  constructor(element, options = {}) {
    this.element = element
    this.options = options
    this._element = {
      element: null, form: null, load: null, buttons: { success: null, cancel: null },
    }
    this.value = this.element.innerHTML
    this.route = this.element.dataset.href ?? ''
    this.field = this.element.dataset.field ?? ''
    this.title = this.element.dataset.title ?? this.element.title ?? 'titre'
    this.type = this.element.dataset.type ?? 'text'
    this.required = this.element.dataset.required ?? false

    element.classList.add('editable-active')
    // if (this.value.trim() === '') {
    //
    // }

    this.init_text()
    this.showPopover()
    this.initHidePopover()
  }

  initHidePopover() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.popover.hide()
      }
    })
    document.addEventListener('click', (e) => {
      this.hidePopover(e)
    })
  }

  hidePopover(e) {
    const { target } = e
    if (target === this.popover.tip || target === this.element) return
    let current = target
    while (current = current.parentNode) {
      if (current === this.popover.tip) return
    }
    this.popover.hide()
  }

  showPopover() {
    this.popover = new Popover(this.element, {
      container: 'body',
      content: this.createContent(),
      html: true,
      title: this.title,
    })
  }

  createContent() {
    switch (this.type) {
      case 'textarea':
        return this.createTextareaContent()
      case 'select':
        return this.createSelectContent()
      case 'checkbox':
        return this.createCheckboxContent()
      case 'radio':
        return this.createRadioContent()
      case 'date':
        return this.createDateContent()
      case 'text':
      default:
        return this.createTextContent()
    }
  }

  createTextareaContent() {
    const input = this.createElement('textarea')
    input.cols = 100
    input.rows = 5
    input.value = this.value.trim()
    return this.createContainer(input)
  }

  createTextContent() {
    const input = this.createElement('input')
    input.type = this.type
    input.value = this.value.trim()
    return this.createContainer(input)
  }

  createElement(name) {
    const element = document.createElement(name)
    element.classList.add('form-control')
    if (this.required) {
      element.required = this.required
    }
    this.element.addEventListener('shown.bs.popover', () => {
      element.focus()
    })
    return element
  }

  createContainer(element) {
    this._element.element = element
    this._element.form = this.createContainerForm(element)
    this._element.load = this.createContainerLoad()
    this._element.buttons.success = this.createButtonSuccess()
    this._element.buttons.cancel = this.createButtonCancel()
    this._element.form.append(
      element,
      this._element.load,
      this._element.buttons.success,
      this._element.buttons.cancel,
    )
    return this._element.form
  }

  createContainerForm(element) {
    const form = document.createElement('form')
    form.classList.add('d-flex', 'align-items-start')
    form.style.gap = '20px'
    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      const newValue = element.value
      console.log(this.route)
      console.log(newValue)

      if (this.route !== '' && (this.value !== newValue)) {
        console.log('submit')
        this.load(true)
        const response = await this.ajax(newValue)
        if (response.ok) {
          this.success()
          this.value = element.value
          this.popover.hide()
          this.init_text()
        } else {
          this.error()
        }
        this.load(false)
      } else {
        this.value = element.value
        this.popover.hide()
        this.init_text()
      }
    })
    return form
  }

  createContainerLoad() {
    const div = document.createElement('div')
    div.style.display = 'none'
    div.style.position = 'absolute'
    div.style.background = 'white'
    div.style.width = '100%'
    div.style.height = '100%'
    div.style.top = 0
    div.style.left = 0
    const loader = document.createElement('div')
    loader.classList.add('dark-editable-loader')
    div.append(loader)
    return div
  }

  /* CONTAINER DIV END */

  /* BUTTONS */

  createButton() {
    const button = document.createElement('button')
    button.type = 'button'
    button.classList.add('btn', 'btn-sm')
    return button
  }

  createButtonSuccess() {
    const btnSuccess = this.createButton()
    btnSuccess.type = 'submit'
    btnSuccess.classList.add('btn-success')
    btnSuccess.innerHTML = '<i class="fas fa-check"></i>'
    return btnSuccess
  }

  createButtonCancel() {
    const btnCancel = this.createButton()
    btnCancel.classList.add('btn-danger')
    btnCancel.innerHTML = '<i class="fas fa-times"></i>'
    btnCancel.addEventListener('click', () => {
      this.popover.hide()
    })
    return btnCancel
  }

  /* BUTTONS END */
  init_text() {
    const emptyClass = 'editable-empty'
    this.element.classList.remove(emptyClass)
    let empty = true
    switch (this.type) {
      default:
        if (this.value.trim() === '') {
          this.element.innerHTML = '-vide-'
        } else {
          this.element.innerHTML = this.value
          empty = false
        }
        break
      // case 'select':
      //   this.element.innerHTML = this.emptytext
      //   if (this.value !== '' && this.source.length > 0) {
      //     this.source.forEach((item) => {
      //       if (item.value === this.value) {
      //         this.element.innerHTML = item.text
      //         empty = false
      //       }
      //     })
      //   }
      //   break
      // case 'date':
      // case 'datetime':
      //   if (this.value === '') {
      //     this.element.innerHTML = this.emptytext
      //   } else {
      //     this.element.innerHTML = moment(this.value).format(this.viewformat)
      //     empty = false
      //   }
      //   break
    }
    if (empty) {
      this.element.classList.add(emptyClass)
    }
  }

  load(action) {
    if (action) {
      this._element.load.style.display = 'block'
    } else {
      this._element.load.style.display = 'none'
    }
  }

  /* AJAX */

  async ajax(newValue) {
    const form = new FormData()
    form.append('field', this.field)
    form.append('value', newValue)
    form.append('type', this.type)
    const option = {}
    option.method = 'POST'
    option.body = form
    return fetch(this.route, option)
  }

  success() {
    addCallout('Données mises à jour', 'success')
  }

  error() {
    addCallout('Erreur lors de la mise à jour', 'error')
  }

  createDateContent() {
    const input = this.createElement('input')
    input.type = this.type
    input.value = this.value.trim()
    return this.createContainer(input)
  }

  createRadioContent() {
    const input = this.createElement('input')
    input.type = this.type
    input.value = this.value.trim()
    return this.createContainer(input)
  }

  createCheckboxContent() {
    const input = this.createElement('input')
    input.type = this.type
    input.value = this.value.trim()
    return this.createContainer(input)
  }

  createSelectContent() {
    const input = this.createElement('input')
    input.type = this.type
    input.value = this.value.trim()
    return this.createContainer(input)
  }
}
