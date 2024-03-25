// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.borne.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/02/2024 18:48
import Routing from 'fos-router'
import { addCallout } from '../util'
import { get } from '../fetch'

document.querySelectorAll('.visibiliteBorne').forEach((element) => {
  document.addEventListener('click', (event) => {
    const btn = event.target
    const id = btn.getAttribute('data-id')

    // I assume that you have a 'Routing' global object as in symfony
    const url = Routing.generate('administration_borne_visibilite', { id })

    get(url)
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          addCallout('Message masqué avec succés !', 'success')
          btn.classList.remove('btn-success')
          btn.classList.add('btn-danger')
          const icon = btn.querySelector('i')
          icon.classList.remove('fa-eye')
          icon.classList.add('fa-eye-slash')
          btn.setAttribute('title', 'Message masqué. Rendre visible')
        } else {
          addCallout('Message affiché avec succés !', 'success')
          btn.classList.remove('btn-danger')
          btn.classList.add('btn-success')
          const icon = btn.querySelector('i')
          icon.classList.remove('fa-eye-slash')
          icon.classList.add('fa-eye')
          btn.setAttribute('title', 'Message affiché. Rendre invisible')
        }
      })
  })
})
