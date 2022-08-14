// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/quizzQualite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30

import $ from 'jquery'
import Routing from 'fos-router'

$(document).on('change', '.questionQualite', function () {
  $.ajax({
    url: Routing.generate('app_etudiant_qualite_ajax_reponse', {
      questionnaire: $('#questionnaire').val(),
      typeQuestionnaire: $(this).data('typequestionnaire'),
    }),
    method: 'POST',
    data: {
      cleReponse: $(this).attr('id'),
      cleQuestion: $(this).attr('name'),
      etudiant: $(this).data('etudiant'),
    },
    success() {

    },
  })
})

$(document).on('blur', '.questionQualiteTextArea', function () {
  $.ajax({
    url: Routing.generate('app_etudiant_qualite_ajax_reponse_txt', {
      questionnaire: $('#questionnaire').val(),
      typeQuestionnaire: $(this).data('typequestionnaire'),
    }),
    method: 'POST',
    data: {
      cleQuestion: $(this).attr('name'),
      value: $(this).val(),
      etudiant: $(this).data('etudiant'),
    },
    success() {

    },
  })
})
