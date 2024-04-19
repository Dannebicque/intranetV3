// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/components/SelectComplete.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/04/2024 10:28

import TomSelect from 'tom-select'

export default class SelectComplete extends HTMLSelectElement {
  constructor() {
    let options = {
      maxOptions: null,
    }
    super()
    if (this.dataset.options) {
      options = JSON.parse(this.dataset.options)
    }
    new TomSelect(this, options)
  }
}
