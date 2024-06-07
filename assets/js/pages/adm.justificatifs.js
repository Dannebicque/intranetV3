// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.justificatifs.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/06/2024 08:43
import $ from 'jquery'
import Routing from 'fos-router'
import { addCallout } from '../util'

document.querySelectorAll('.justificatif-accepte').forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    const justificatif = e.getAttribute('data-justificatif')
    fetch(Routing.generate('administration_absence_justificatif_change_etat', { uuid: justificatif, etat: 'A' }), {
      method: 'POST',
    })
      .then((response) => {
        if (!response.ok) {
          addCallout('Une erreur est survenue !', 'danger')
        }
        return response.json()
      })
      .then((data) => {
        const bx = document.querySelector(`.bx_${justificatif}`)
        const parent = bx.parentElement
        bx.remove()

        let html = `<a href="#" class="btn btn-success btn-outline bx_${justificatif}">Demande Acceptée</a>`
        html += `<button data-justificatif="${justificatif}" class="btn btn-warning btn-outline btn-square justificatif-annuler bx_${justificatif}" data-provide="tooltip" data-placement="bottom" title="Annuler"><i class="fas fa-rotate-left"></i></button>`

        parent.insertAdjacentHTML('afterbegin', html)
        addCallout('Justificatif d\'absence validé !', 'success')
      })
      .catch((error) => {
        addCallout('Une erreur est survenue !', 'danger')
      })
  })
})

$(document).on('click', '.justificatif-refuse', function (e) {
  const justificatif = $(this).data('justificatif')
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', { uuid: justificatif, etat: 'R' }),
    success(e) {
      const bx = $(`.bx_${justificatif}`)
      const parent = bx.parent()
      bx.remove()
      let html = `<a href="#" class="btn btn-warning btn-outline bx_${justificatif}">Demande Refusée</a>`
      html = `${html}<button data-justificatif="${justificatif}"
        class="btn btn-danger btn-outline btn-square justificatif-annuler bx_${justificatif}" data-provide="tooltip" data-placement="bottom"
        title="Annuler"><i class="fas fa-rotate-left"></i></button>`
      parent.prepend(html)
      addCallout('Justificatif d\'absence refusé !', 'success')
    },
    error() {
      addCallout('Une erreur est survenue !', 'danger')
    },
  })
})

$(document).on('click', '.justificatif-annuler', function (e) {
  const justificatif = $(this).data('justificatif')
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', { uuid: justificatif, etat: 'D' }),
    success(e) {
      const bx = $(`.bx_${justificatif}`)
      const parent = bx.parent()
      bx.remove()
      const html = `<a href="#"
        class="btn btn-success btn-outline btn-square justificatif-accepte bx_${justificatif}" data-provide="tooltip"
        data-justificatif="${justificatif}"
        data-placement="bottom" title="atitle.accepter.le.justificatif">
        <i class="fas fa-check"></i> Accepter</a> 
        <a href="#"
           class="btn btn-danger btn-outline btn-square justificatif-refuse bx_${justificatif}" data-provide="tooltip"
           data-justificatif="${justificatif}"
           data-placement="bottom" title="atitle.refuser.le.justificatif">
           <i class="fas fa-ban"></i> Refuser
        </a>`
      parent.prepend(html)
      addCallout('Etat du justificatif d\'absence annulé !', 'success')
    },
    error(e) {
      addCallout('Une erreur est survenue !', 'danger')
    },
  })
})
