// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.justificatifs.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import Routing from 'fos-router'
import { addCallout } from '../util'

$(document).on('click', '.justificatif-accepte', function (e) {
  const justificatif = $(this).data('justificatif')
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', { uuid: justificatif, etat: 'A' }),
    success(e) {
      const bx = $(`.bx_${justificatif}`)
      const parent = bx.parent()
      bx.remove()
      let html = '<a href="#" class="btn btn-success btn-outline"><i class="ti-check"></i>Accepté</a>'
      html = `${html}<button data-justificatif="${justificatif}"
        class="btn btn-danger btn-outline btn-square justificatif-annuler bx_${justificatif}" data-provide="tooltip" data-placement="bottom"
        title="Annuler">
          <i class="material-icons">undo</i></button>`
      parent.prepend(html)
      addCallout('Justificatif d\'absence validé !', 'success')
    },
    error(e) {
      addCallout('Une erreur est survenue !', 'danger')
    },
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
      let html = '<a href="#" class="btn btn-warning btn-outline"><i class="ti-check"></i>Refusé</a>'
      html = `${html}<button data-justificatif="${justificatif}"
        class="btn btn-danger btn-outline btn-square justificatif-annuler bx_${justificatif}" data-provide="tooltip" data-placement="bottom"
        title="Annuler"><i class="material-icons">undo</i></button>`
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
        <i class="ti-check"></i></a>
        <a href="#"
           class="btn btn-warning btn-outline btn-square justificatif-refuse bx_${justificatif}" data-provide="tooltip"
           data-justificatif="${justificatif}"
           data-placement="bottom" title="atitle.refuser.le.justificatif">
           <i class="ti-na"></i>
        </a>
        <a href="${Routing.generate('administration_absence_justificatif_delete', { id: justificatif })}" data-csrf="{{ csrf_token('delete' ~ justificatif.uuidString) }}"
        class="btn btn-danger btn-outline btn-square supprimer bx_${justificatif}"><i
                                               class="ti-close" data-provide="tooltip" data-placement="bottom"
                                               title="atitle.supprimer"></i></a>`
      parent.prepend(html)
      addCallout('Etat du justificatif d\'absence annulé !', 'success')
    },
    error(e) {
      addCallout('Une erreur est survenue !', 'danger')
    },
  })
})
