// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/global_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 18/10/2022 18:59

import { Controller } from '@hotwired/stimulus'
import InPlaceEdit from '../js/inPlaceEdit'

export default class extends Controller {
  connect() {
    console.log('global')
  }
}
