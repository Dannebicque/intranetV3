// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/covid.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/09/2021 12:08
import '../../vendor/jquery.collection.min'

$(document).ready(function () {
  let stagePeriodeSoutenances = $('.selector-covidCreneauPresence')
  if (stagePeriodeSoutenances.length > 0) {
    stagePeriodeSoutenances.collection()
    $(document).on('click', '.covid_attestation_personnel_covidCreneauPresences-collection-action', function () {
      updateDatePicker()
    })
  }
})

function updateDatePicker () {
  $('[data-provide~="datepicker"]').each(function () {
    let options = {
      multidateSeparator: ', ',
      language: 'fr',
      daysOfWeekHighlighted: '06',
      format: 'dd/mm/yyyy'
    }
    $(this).datepicker(options)
  })
}

