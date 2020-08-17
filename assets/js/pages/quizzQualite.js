// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/quizzQualite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 27/06/2020 11:05

$(document).on('change', '.questionQualite', function () {
  $.ajax({
    url: Routing.generate('app_etudiant_qualite_ajax_reponse', {questionnaire: $('#questionnaire').val()}),
    method: 'POST',
    data: {
      cleReponse: $(this).attr('id'),
      cleQuestion: $(this).attr('name')
    },
    success: function () {

    }
  })
})

$(document).on('blur', '.questionQualiteTextArea', function () {
  $.ajax({
    url: Routing.generate('app_etudiant_qualite_ajax_reponse_txt', {questionnaire: $('#questionnaire').val()}),
    method: 'POST',
    data: {
      cleQuestion: $(this).attr('name'),
      value: $(this).val()
    },
    success: function () {

    }
  })
})
