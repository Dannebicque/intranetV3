// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/covid.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/11/2020 15:33
import '../../vendor/jquery.collection.min'
import '../../vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min'
import $ from 'jquery'


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

