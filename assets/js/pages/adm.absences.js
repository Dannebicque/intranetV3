// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.absences.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/09/2021 12:08
import {addCallout} from '../util'

$(document).on('change', '#justifier_etudiant', function () {
  $('#listeJustifie').empty().load(Routing.generate('administration_absences_liste_absence_etudiant', {etudiant: $(this).val()}))
})

$(document).on('click', '.checkAbsence', function (e) {
  let absence = $(this).data('absence')

  let etat = 0

  if (($(this).is(':checked'))) {
    etat = 1
  }

  $.ajax({
    url: Routing.generate('administration_absences_justifie', {'absence': absence, 'etat': etat}),
    type: 'GET',
    success: function (data) {
      if (data) {
        $('#ligne_' + absence).removeClass('bg-pale-warning').addClass('bg-pale-success')
      } else {
        $('#ligne_' + absence).removeClass('bg-pale-success').addClass('bg-pale-warning')
      }
    }
  })

})

