// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.reservation.materiel_commun.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import { addCallout } from '../util'
import Routing from 'fos-router'

$(document).ready(() => {
  $('[data-stud="ok"]').addClass('reservationstudio')
})
$(document).on('click', '.emprunt', function () {
  const $obj = $(this)
  $.ajax(
    {
      url: Routing.generate('administration_reservation_materiel_commun_add'),
      type: 'POST',
      data: `id=${$obj.val()}`,
      success(data) {
        $obj.parent().addClass('reservationaccepte')
      },
      error() {
        addCallout('Erreur lors la suppression.', 'error')
      },
    },
  )
})

$(document).on('click', '.annulebloc', function () {
  const $obj = $(this)
  $.ajax(
    {
      url: Routing.generate('administration_reservation_materiel_commun_suppr'),
      type: 'DELETE',
      data: `id=${$obj.data('id')}`,
      success(data) {
        $obj.parent().removeClass('reservationaccepte').empty()
      },
      error() {
        addCallout('Erreur lors la suppression.', 'error')
      },
    },
  )
})
