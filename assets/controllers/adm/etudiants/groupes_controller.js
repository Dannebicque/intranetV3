// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/adm/etudiants/groupes_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/06/2024 13:15

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static values = {
    urlAffecte: String,
    urlChangeTypeGroupe: String,
  }

  static targets = ['listeEtudiantsGroupes']

  changeTypeGroupe(event) {
    fetch(`${this.urlChangeTypeGroupeValue}?typeGroupe=${event.params.typegroupe}`)
      .then((response) => response.text())
      .then((data) => {
        document.querySelectorAll('.btnGroupe').forEach((element) => {
          element.classList.remove('btn-primary')
          element.classList.add('btn-secondary')
        })
        event.target.classList.remove('btn-secondary')
        event.target.classList.add('btn-primary')

        this.listeEtudiantsGroupesTarget.innerHTML = data
      })
  }

  changeGroupe(event) {
    if (event.target.checked) {
      console.log(event.target.name)
      const newgroupe = event.target.value
      const oldgroupe = `#${event.target.name}_old`

      const params = new URLSearchParams()
      params.append('id', event.target.name)
      params.append('newgroupe', newgroupe)
      params.append('oldgroupe', document.querySelector(oldgroupe).value)

      fetch(this.urlAffecteValue, {
        method: 'POST',
        body: params,
      })
        .then(() => {
          document.querySelector(oldgroupe).value = newgroupe
        })
    }
  }
}
