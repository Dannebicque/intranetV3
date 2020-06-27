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
