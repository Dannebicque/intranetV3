// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/components/SelectComplete.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/08/2021 11:50

import TomSelect from 'tom-select'

export default class SelectComplete extends HTMLSelectElement {

  constructor () {
    super()
    new TomSelect(this, {})
  }
}
