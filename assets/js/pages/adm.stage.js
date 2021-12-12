// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.stage.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/06/2021 08:24
import {addCallout} from '../util'
import '../../vendor/jquery.collection.min'

$(document).on('change', '.changetuteur', function () {
  $.ajax({
    url: Routing.generate('administration_stage_etudiant_change_tuteur', {
      stageEtudiant: $(this).data('stage'),
      tuteur: $(this).val()
    }),
    success: function () {
      addCallout('Tuteur universitaire modifié !', 'success')
    }
  })
})

$(document).ready(function () {
  let stagePeriodeSoutenances = $('.selector-stagePeriodeSoutenances')
  if (stagePeriodeSoutenances.length > 0) {
    stagePeriodeSoutenances.collection()
    $(document).on('click', '.stage_periode_stagePeriodeSoutenances-collection-action', function () {
      updateDatePicker()
    })
  }
  let stagePeriodeInterruptions = $('.selector-stagePeriodeInterruptions')
  if (stagePeriodeInterruptions.length > 0) {
    stagePeriodeInterruptions.collection()
    $(document).on('click', '.stage_periode_stagePeriodeInterruptions-collection-action', function () {
      updateDatePicker()
    })
  }


})

function updateDatePicker () {
  $('[data-provide~="datepicker"]').each(function () {
    var options = {
      multidateSeparator: ', ',
      language: 'fr',
      daysOfWeekHighlighted: '06'
    }

    if ($(this).prop('tagName') != 'INPUT') {
      //si ce n'est pas un input => donc un date range
      options.inputs = [$(this).find('input:first'), $(this).find('input:last')]
    }
    $(this).datepicker(options)
  })
}

