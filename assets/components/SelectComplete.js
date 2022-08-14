// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/components/SelectComplete.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/07/2022 08:34

import TomSelect from 'tom-select'

export default class SelectComplete extends HTMLSelectElement {

  constructor() {
    let options = {}
    super()
    if (this.dataset.options) {
      options = JSON.parse(this.dataset.options)
    }
    new TomSelect(this, options)
  }
}
