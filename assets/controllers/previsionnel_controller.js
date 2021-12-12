// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/controllers/previsionnel_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/05/2021 20:00

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['totalCm']

  update () {
    console.log(this.element)
    const element = this.totalcmTarget
    const totalCm = element.value
    console.log(`Hello, ${totalCm}!`)
  }
}

