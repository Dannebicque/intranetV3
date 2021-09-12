// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/components/SelectChangeWidget.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/09/2021 18:18

import {post} from '../js/fetch'

export default class SelectChangeWidget extends HTMLSelectElement {

  constructor () {

    super()
    this.addEventListener('change', (e) => {
      console.log('change')
      console.log(e.target.dataset.params)
      this.route = e.target.dataset.route
      this.params = JSON.parse(e.target.dataset.params)
      this.params.value = e.target.value
      //todo: éventuellement field et post?
      this._update()
    })
  }

  _update () {
    console.log(this.params)
    post(
      this.route,
      this.params
    )
  }
}
