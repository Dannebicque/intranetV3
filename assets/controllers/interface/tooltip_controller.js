// Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/interface/tooltip_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 10/09/2023 16:42

import { Controller } from '@hotwired/stimulus'
import { Tooltip } from 'bootstrap'

export default class extends Controller {
  connect() {
    const tooltip = new Tooltip(this.element, {
      trigger: 'hover',
      placement: this.element.dataset.bsPlacement ?? 'bottom',
    })
  }
}
