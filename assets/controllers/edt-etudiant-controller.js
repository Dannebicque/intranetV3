// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/edt-etudiant-controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/08/2024 08:24

import { Controller } from '@hotwired/stimulus'
import { _generateGrid, _placeEvents } from '../js/Edt'

export default class extends Controller {
  static values = {
    events: String,
  }

  connect() {
    _generateGrid(30)
    _placeEvents(JSON.parse(this.eventsValue), 30, 'etudiant')
  }
}
