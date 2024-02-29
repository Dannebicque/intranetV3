// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/form-collection_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/02/2024 20:58

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['fields', 'field', 'addButton']

  static values = {
    prototype: String,
    maxItems: Number,
    itemsCount: Number,
  }

  connect() {
    this.index = this.itemsCountValue = this.fieldTargets.length
  }

  addItem(event) {
    event.preventDefault()
    if (this.maxItemsValue === 0 || this.itemsCountValue < this.maxItemsValue) {
      const prototype = JSON.parse(this.prototypeValue)
      const newField = prototype.replace(/__name__/g, this.index)
      this.fieldsTarget.insertAdjacentHTML('beforeend', newField)
      this.index++
      this.itemsCountValue++
    }
  }

  removeItem(event) {
    event.preventDefault()
    this.fieldTargets.forEach((element) => {
      if (element.contains(event.target)) {
        element.remove()
        this.itemsCountValue--
      }
    })
  }

  itemsCountValueChanged() {
    if (this.hasAddButtonTarget === false || this.maxItemsValue === 0) {
      return
    }
    const maxItemsReached = this.itemsCountValue >= this.maxItemsValue
    this.addButtonTarget.classList.toggle('hidden', maxItemsReached)
  }
}
