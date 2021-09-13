// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/components/SelectComplete.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/09/2021 21:00

import TomSelect from 'tom-select'

export default class SelectComplete extends HTMLSelectElement {

  constructor () {
    let options = {}
    super()
    if (this.dataset.options) {
      options = JSON.parse(this.dataset.options)
    }
    new TomSelect(this, options)

  }
}
