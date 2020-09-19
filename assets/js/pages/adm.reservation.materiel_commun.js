// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.reservation.materiel_commun.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/09/2020 09:29

import {addCallout} from '../util'

$(document).ready(function () {
  $('[data-stud="ok"]').addClass('reservationstudio')
})
$(document).on('click', '.emprunt', function () {
  var $obj = $(this)
  $.ajax(
    {
      url: Routing.generate('administration_reservation_materiel_commun_add'),
      type: 'POST',
      data: 'id=' + $obj.val(),
      success: function (data) {
        $obj.parent().addClass('reservationaccepte')
      },
      error: function () {
        addCallout('Erreur lors la suppression.', 'error')

      }
    })
})

$(document).on('click', '.annulebloc', function () {
  var $obj = $(this)
  $.ajax(
    {
      url: Routing.generate('administration_reservation_materiel_commun_suppr'),
      type: 'DELETE',
      data: 'id=' + $obj.data('id'),
      success: function (data) {
        $obj.parent().removeClass('reservationaccepte').empty()
      },
      error: function () {
        addCallout('Erreur lors la suppression.', 'error')
      }
    })
})
