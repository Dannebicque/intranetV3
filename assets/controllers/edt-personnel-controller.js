// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/controllers/lookup-search-controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 09/11/2021 14:33

import {Controller} from 'stimulus'
import {post} from '../js/fetch'

export default class extends Controller {

  static targets = ['etatAppel']
  static values = {
    urlCarnetDeBord: String,
    urlPasDAbsent: String
  }

  connect () {
    console.log('edt')
  }

  btnPasAbsent (e) {
    e.preventDefault()
    console.log('pas d\'absence')
    console.log(e.currentTarget.dataset.event)
    post(this.urlPasDAbsentValue, {event: e.currentTarget.dataset.event}).then(() => {
      this.etatAppelTarget.classList.remove('btn-danger')
      this.etatAppelTarget.firstElementChild.classList.remove('fa-times')
      this.etatAppelTarget.firstElementChild.classList.add('fa-check')
      this.etatAppelTarget.classList.add('btn-success')
    })
  }

  btnCahierTexte (e) {
    e.preventDefault()
    //ouvrir modal avec données du créneau + zone de saisie, pré-rempli si déjà existante.
    console.log('pas d\'absence')
  }
}
