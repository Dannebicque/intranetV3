// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/sadm.originaux.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/08/2022 11:59
import $ from 'jquery'
import { addCallout } from '../util'
import Routing from 'fos-router'

$(document).on('click', '.acces-autorise', function (e) {
  console.log('acces-autorise')
  e.preventDefault()
  const personnel = $(this).data('personnel')
  $.ajax({
    url: Routing.generate('sa_qualite_originaux_acces_change_etat', { personnel: personnel, etat: 'a' }),
    success() {
      const bx = $(`.bx_btn_${personnel}`)
      const parent = bx.parent()
      bx.remove()
      parent.prepend('<a href="#" class="btn btn-danger btn-outline"><i class="fas fa-ban"></i> Retirer ?</a>')

      const bxBadge = $(`.bx_badge_${personnel}`)
      const parentBadge = bxBadge.parent()
      bxBadge.remove()
      parentBadge.prepend('<a href="#" class="btn btn-success btn-outline">Accès à Originaux autorisé</a>')

      addCallout('Accès autorisé à Originaux !', 'success')
    },
    error() {
      addCallout('Une erreur est survenue !', 'danger')
    },
  })
})

$(document).on('click', '.acces-interdit', function (e) {
  e.preventDefault()
  const personnel = $(this).data('personnel')
  $.ajax({
    url: Routing.generate('sa_qualite_originaux_acces_change_etat', { personnel: personnel, etat: 'r' }),
    success() {
      const bx = $(`.bx_btn_${personnel}`)
      const parent = bx.parent()
      bx.remove()
      parent.prepend('<a href="#" class="btn btn-success btn-outline"><i class="fas fa-check"></i> Autoriser ?</a>')

      const bxBadge = $(`.bx_badge_${personnel}`)
      const parentBadge = bxBadge.parent()
      bxBadge.remove()
      parentBadge.prepend('<a href="#" class="btn btn-danger btn-outline">Aucun accès à Originaux</a>')

      addCallout('Accès à Originaux retirés !', 'success')
    },
    error() {
      addCallout('Une erreur est survenue !', 'danger')
    },
  })
})
