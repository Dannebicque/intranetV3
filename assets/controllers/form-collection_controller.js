// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/controllers/form-collection_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 03/11/2021 17:36

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {

  static targets = ['fields', 'field', 'addButton']
  static values = {
    prototype: String,
    maxItems: Number,
    itemsCount: Number
  }

  connect () {
    this.index = this.itemsCountValue = this.fieldTargets.length
  }

  addItem (event) {
    event.preventDefault()
    if (this.maxItemsValue === 0 || this.itemsCountValue < this.maxItemsValue) {
      let prototype = JSON.parse(this.prototypeValue)
      const newField = prototype.replace(/__name__/g, this.index)
      this.fieldsTarget.insertAdjacentHTML('beforeend', newField)
      this.index++
      this.itemsCountValue++
    }
  }

  removeItem (event) {
    event.preventDefault()
    this.fieldTargets.forEach(element => {
      if (element.contains(event.target)) {
        element.remove()
        this.itemsCountValue--
      }
    })
  }

  itemsCountValueChanged () {
    if (false === this.hasAddButtonTarget || 0 === this.maxItemsValue) {
      return
    }
    const maxItemsReached = this.itemsCountValue >= this.maxItemsValue
    this.addButtonTarget.classList.toggle('hidden', maxItemsReached)
  }

}
