$('.savegroupe').click(function () {
  var groupe = $(this).attr('id')
  console.log(groupe)
  var notes = {'notes': []}
  $('.noteetudiant:input').each(function () {
    if ($(this).hasClass(groupe)) //vérifier que c'est le groupe concerné
    {
      var $id = $(this).data('etudiant')
      var obj = {
        'id': $id,
        'note': $(this).val(),
        'commentaire': $('#com_' + $id).val()
      }

      notes['notes'].push(obj)
    }
  })

  $.ajax(
    {
      url: Routing.generate('application_personnel_note_ajax_saisie.fr', {evaluation: $(this).data('evaluation')}),
      type: 'POST',
      data: {
        notes: notes
      },
      success: function (data) {
        addCallout('Les notes de <strong>ce groupe</strong> ont été enregistrées avec succés ! Vous pouvez les modifier !', 'success')
      },
      error: function () {
        addCallout('Une erreur est survenu pendant l\'envoi... <br>Veuillez réessayer', 'error')
      }
    })

})

$(document).on('keyup', '.noteetudiant', function (e) {
  var val = $(this).val()

  if (val == '-0.01') {
    $(this).addClass('is-valid')
  } else if (parseFloat(val) >= 0 && parseFloat(val) <= 20) {
    $(this).addClass('is-valid')
  } else {
    $(this).addClass('is-invalid')
  }
})