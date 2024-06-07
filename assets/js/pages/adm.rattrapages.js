// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.rattrapages.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/06/2024 08:43
import Routing from 'fos-router'
import { addCallout } from '../util'

document.querySelectorAll('.rattrapage-accepte').forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    const rattrapage = e.getAttribute('data-rattrapage')

    fetch(Routing.generate('administration_rattrapage_change_etat', { uuid: rattrapage, etat: 'a' }))
      .then((response) => {
        // handle success
        if (response.ok) {
          const bx = document.querySelector(`.bx_${rattrapage}`)
          const parent = bx.parentElement
          bx.parentNode.removeChild(bx)
          const a = document.createElement('a')
          a.setAttribute('href', '#')
          a.classList.add('btn', 'btn-success', 'btn-outline')
          parent.insertBefore(a, parent.firstChild)
          addCallout('Demande de rattrapage validée !', 'success')
        } else {
          addCallout('Une erreur est survenue !', 'danger')
        }
      })
      .catch((error) => {
        // handle error
        addCallout('Une erreur est survenue !', 'danger')
      })
  });
});

document.querySelectorAll('.rattrapage-refuse').forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault()

    const rattrapage = e.getAttribute('data-rattrapage')
    const url = Routing.generate('administration_rattrapage_change_etat', { uuid: rattrapage, etat: 'r' })

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`)
        }

        const bx = document.querySelector(`.bx_${rattrapage}`)
        const parent = bx.parentNode
        bx.remove()
        const anchor = document.createElement('a')
        anchor.href = '#'
        anchor.className = 'btn btn-warning btn-outline'
        anchor.innerHTML = '<i class="ti-na"></i>Refusée'

        parent.prepend(anchor)
        addCallout('Demande de rattrapage refusée !', 'success')
      })
      .catch((error) => {
        addCallout('Une erreur est survenue !', 'danger')
      });
  })
});
