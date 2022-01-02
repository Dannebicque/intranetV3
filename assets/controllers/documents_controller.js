// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/controllers/modal_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/10/2021 21:49

import { Controller } from '@hotwired/stimulus'
import {post} from '../js/fetch'
import {addCallout} from '../js/util'

export default class extends Controller {
  static targets = ['content']
  static values = {
    url: String,
    urlDocuments: String,
    urlDocumentsFavori: String
  }

  connect () {
    this._listeTypeDocuments()
  }

  async afficheDocuments (event) {
    document.getElementById('boutonBack').style.display = 'inline-flex'
    this.contentTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      typedocument: event.currentTarget.dataset.type
    })
    const response = await fetch(`${this.urlDocumentsValue}?${params.toString()}`)
    this.contentTarget.innerHTML = await response.text()
  }

  async afficheDocumentsFavori () {
    document.getElementById('boutonBack').style.display = 'inline-flex'
    this.contentTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(`${this.urlDocumentsFavoriValue}`)
    this.contentTarget.innerHTML = await response.text()
  }

  boutonBack () {
    document.getElementById('boutonBack').style.display = 'none'
    this._listeTypeDocuments()
  }

  async _listeTypeDocuments () {
    document.getElementById('boutonBack').style.display = 'none'
    this.contentTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(`${this.urlValue}`)
    this.contentTarget.innerHTML = await response.text()
  }

  async addFavori (event) {
    let data = await post(Routing.generate('document_add_favori', {document: event.currentTarget.value}))
    if (data === 'add') {
      addCallout('Document ajouté à vos favoris', 'success')//gérer avec un event ? qui remonte sur le toast-controller?
    } else {
      addCallout('Document retiré de vos favoris', 'success')
    }
  }
}
