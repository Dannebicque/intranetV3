// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/covid.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 22/06/2022 17:34
import $ from 'jquery'
import '../../vendor/jquery.collection.min'

$(document).ready(() => {
  const stagePeriodeSoutenances = $('.selector-covidCreneauPresence')
  if (stagePeriodeSoutenances.length > 0) {
    stagePeriodeSoutenances.collection()
    $(document).on('click', '.covid_attestation_personnel_covidCreneauPresences-collection-action', () => {
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
      format: 'dd/mm/yyyy',
    }
    $(this).datepicker(options)
  })
}
