// Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/annee-select_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/08/2026 10:38

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static values = {
    url: String,
    id: Number,
  }

  change(event) {
    const anneeId = event.target.value
    const id = this.idValue
    const url = this.urlValue.replace('ID', id)

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `annee_id=${anneeId}`,
    }).then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Optional: add a visual feedback if needed
        } else {
          alert(`Erreur: ${data.message}`)
        }
      })
  }
}
