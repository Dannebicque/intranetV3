// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/formulaire_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/02/2024 20:58

import { Controller } from '@hotwired/stimulus'
import { Modal } from 'bootstrap'

export default class extends Controller {
  static targets = ['output']

  static values = { url: String }

  async connect() {
    // On créé une variable nommée html qui va récupérer l'url dans la vue index.html.twig
    const html = await fetch(this.urlValue)
    // On envoie le contenu de la page dont l'url a été récupéré (modal_vous.html.twig) dans le span "data-formulaire-target"
    this.outputTarget.innerHTML = await html.text()
    const myModal = new Modal(document.getElementById('exampleModal'), {})
    myModal.show()
  }
}
