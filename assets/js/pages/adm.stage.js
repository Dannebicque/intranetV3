// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.stage.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/08/2020 08:26
import {addCallout} from '../util'
import '../../vendor/jquery.collection.min'
import $ from 'jquery'

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

$(document).on('click', '.enregistreModeleMail', function () {
  const etat = $(this).data('type')
  $.ajax({
    url: Routing.generate('administration_stage_periode_courrier_sauvegarde_modele', {
      uuid: $(this).data('periode'),
      mail: etat
    }),
    data: {
      message: ed2.root.innerHTML,
      sujet: $('#sujet_' + etat).val()
    },
    success: function () {
      addCallout('Modèle enregistré !', 'success')
    }
  })
})

$(document).ready(function () {
  $('.selector-stagePeriodeSoutenances').collection()
  $('.selector-stagePeriodeInterruptions').collection()
  $(document).on('click', '.stage_periode_stagePeriodeInterruptions-collection-action', function () {
    updateDatePicker()
  })

  $(document).on('click', '.stage_periode_stagePeriodeSoutenances-collection-action', function () {
    updateDatePicker()
  })
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

