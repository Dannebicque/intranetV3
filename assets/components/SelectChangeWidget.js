// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/components/SelectChangeWidget.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/07/2022 08:33

import { post } from '../js/fetch'

export default class SelectChangeWidget extends HTMLSelectElement {
  constructor() {
    super()
    this.addEventListener('change', (e) => {
      this.route = e.target.dataset.route
      this.params = JSON.parse(e.target.dataset.params)
      this.params.value = e.target.value
      // todo: éventuellement field et post?
      this._update()
    })
  }

  _update() {
    post(
      this.route,
      this.params,
    )
  }
}
