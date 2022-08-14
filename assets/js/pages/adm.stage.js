// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.stage.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import { addCallout } from '../util'
import '../../vendor/jquery.collection.min'
import Routing from 'fos-router'

$(document).on('click', '.envoyerConvention', function (e) {
  e.preventDefault()
  $.ajax({
    url: Routing.generate('administration_stage_etudiant_envoyer_convention_pdf', {
      id: $(this).data('etudiant'),
    }),
    success() {
      addCallout('Convention envoyée pour signature', 'success')
    },
  })
})

$(document).on('change', '.changetuteur', function () {
  $.ajax({
    url: Routing.generate('administration_stage_etudiant_change_tuteur', {
      stageEtudiant: $(this).data('stage'),
      tuteur: $(this).val(),
    }),
    success() {
      addCallout('Tuteur universitaire modifié !', 'success')
    },
  })
})

$(document).ready(() => {
  const stagePeriodeSoutenances = $('.selector-stagePeriodeSoutenances')
  if (stagePeriodeSoutenances.length > 0) {
    stagePeriodeSoutenances.collection()
    $(document).on('click', '.stage_periode_stagePeriodeSoutenances-collection-action', () => {
      updateDatePicker()
    })
  }
  const stagePeriodeInterruptions = $('.selector-stagePeriodeInterruptions')
  if (stagePeriodeInterruptions.length > 0) {
    stagePeriodeInterruptions.collection()
    $(document).on('click', '.stage_periode_stagePeriodeInterruptions-collection-action', () => {
      updateDatePicker()
    })
  }
})

function updateDatePicker() {
  $('[data-provide~="datepicker"]').each(function () {
    const options = {
      multidateSeparator: ', ',
      language: 'fr',
      daysOfWeekHighlighted: '06',
    }

    if ($(this).prop('tagName') != 'INPUT') {
      // si ce n'est pas un input => donc un date range
      options.inputs = [$(this).find('input:first'), $(this).find('input:last')]
    }
    $(this).datepicker(options)
  })
}
