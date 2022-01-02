// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/controllers/modal_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/10/2021 21:49

import { Controller } from '@hotwired/stimulus'
import {useDispatch} from 'stimulus-use'

export default class extends Controller {
  static values = {
    modalUrl: String,
    modalTitle: String,
    formAction: String,
    size: {type: String, default:'md'},
    form: {type: Boolean, default:false},
    params: Array
  }

  connect () {
    useDispatch(this, {debug: true})
  }

  openModal (event) {
    event.preventDefault()
    this.dispatch("openModal", {
      url: this.modalUrlValue,
      formAction: this.formActionValue,
      form: this.formValue,
      size: this.sizeValue,
      params: this.paramsValue,
      title: this.modalTitleValue })
  }
}
