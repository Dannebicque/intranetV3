// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/components/SelectComplete.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 24/08/2022 15:55

import TomSelect from 'tom-select'

export default class SelectComplete extends HTMLSelectElement {

  constructor() {
    let options = {
      maxOptions: null
    }
    super()
    if (this.dataset.options) {
      options = JSON.parse(this.dataset.options)
    }
    new TomSelect(this, options)
  }
}
