// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/controllers/toast_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/10/2021 15:05
import {Controller} from 'stimulus'
import Toast from '../components/Toast'

export default class extends Controller {
  static values = {
    title: String,
    text: String,
    type: String
  }

  connect () {
    Toast.show(this.typeValue, this.textValue, this.titleValue)
  }
}
