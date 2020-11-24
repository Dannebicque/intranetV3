// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/quizzQualite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 24/11/2020 12:54

import '../wizard'

$(document).on('change', '.questionQualite', function () {
  $.ajax({
    url: Routing.generate('app_etudiant_qualite_ajax_reponse', {
      questionnaire: $('#questionnaire').val(),
      typeQuestionnaire: $(this).data('typequestionnaire')
    }),
    method: 'POST',
    data: {
      cleReponse: $(this).attr('id'),
      cleQuestion: $(this).attr('name'),
      etudiant: $(this).data('etudiant')
    },
    success: function () {

    }
  })
})

$(document).on('blur', '.questionQualiteTextArea', function () {
  $.ajax({
    url: Routing.generate('app_etudiant_qualite_ajax_reponse_txt', {
      questionnaire: $('#questionnaire').val(),
      typeQuestionnaire: $(this).data('typequestionnaire')
    }),
    method: 'POST',
    data: {
      cleQuestion: $(this).attr('name'),
      value: $(this).val(),
      etudiant: $(this).data('etudiant')
    },
    success: function () {

    }
  })
})
