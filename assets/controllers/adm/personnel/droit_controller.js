// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/adm/personnel/droit_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/04/2024 10:08

import { Controller } from '@hotwired/stimulus'
import JsonResponse from '../../../js/JsonResponse'

export default class extends Controller {
  static values = {
    url: String,
  }

  connect() {
    console.log('connect')
  }

  async changeDroit(event) {
    console.log('changeDroit')
    const { droit } = event.params
    const body = new FormData()
    body.append('droit', droit)
    const url = `${this.urlValue}`
    await fetch(url, {
      method: 'POST',
      body,
    }).then((response) => {
      JsonResponse(response)
    })
  }
}
