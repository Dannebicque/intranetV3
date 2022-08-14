// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/sadm.anneeuniversitaire.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import { addCallout } from '../util'
import Routing from 'fos-router'

$(document).on('change', '.activeAnneeUniversitaire', function (e) {
  e.preventDefault()
  e.stopPropagation()
  const elt = $(this)
  $.ajax({
    url: Routing.generate('sa_annee_universitaire_change_active', { annee: $(this).data('id') }),
    method: 'POST',
    data: {
      value: $(this).prop('checked'),
    },
    success(data) {
      $('.activeAnneeUniversitaire').attr('checked', false)
      elt.attr('checked', true)
      addCallout('Configuration enregistrée', 'success')
    },
    error(e) {
      addCallout('Erreur lors de l\'enregistrement de la configuration', 'danger')
    },
  })
})
