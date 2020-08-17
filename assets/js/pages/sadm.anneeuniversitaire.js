// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/sadm.anneeuniversitaire.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 17/08/2020 14:19

import {addCallout} from '../util'

$(document).on('change', '.activeAnneeUniversitaire', function (e) {
  e.preventDefault()
  e.stopPropagation()
  let elt = $(this)
  $.ajax({
    url: Routing.generate('sa_annee_universitaire_change_active', {annee: $(this).data('id')}),
    method: 'POST',
    data: {
      value: $(this).prop('checked')
    },
    success: function (data) {
      $('.activeAnneeUniversitaire').attr('checked', false)
      elt.attr('checked', true)
      addCallout('Configuration enregistrée', 'success')
    }, error: function (e) {
      addCallout('Erreur lors de l\'enregistrement de la configuration', 'danger')
    }
  })
})
