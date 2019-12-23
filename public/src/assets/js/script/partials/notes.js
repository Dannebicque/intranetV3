/*
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/public/src/assets/js/script/partials/notes.js
 * @author     David Annebicque
 * @project intranetv3
 * @date 18/08/2019 11:48
 * @lastUpdate 18/08/2019 11:46
 */

$('.savegroupe').click(function () {
  const groupe = $(this).attr('id')
  const notes = {'notes': []}
  $('.noteetudiant:input').each(function () {
    if ($(this).hasClass(groupe)) //vérifier que c'est le groupe concerné
    {
      const $id = $(this).data('etudiant')
      const obj = {
        'id': $id,
        'note': $(this).val(),
        'absence': $('#abs_' + $id).prop('checked'),
        'commentaire': $('#com_' + $id).val()
      }

      notes['notes'].push(obj)
    }
  })

  $.ajax(
    {
      url: Routing.generate('application_personnel_note_ajax_saisie', {uuid: $(this).data('evaluation')}),
      type: 'POST',
      data: {
        notes: notes
      },
      success: function (data) {
        addCallout('Les notes de <strong>ce groupe</strong> ont été enregistrées avec succés ! Vous pouvez les modifier !', 'success')
        //feature: supprimer le "orange" sur les notes sauvegardées. Peut être récupérer en data les notes.
      },
      error: function () {
        addCallout('Une erreur est survenue pendant l\'envoi... <br>Veuillez réessayer', 'danger')
        //feature: être plus précis ?
      }
    })

})

$(document).on('keyup', '.noteetudiant', function (e) {
  const val = $(this).val()
  console.log(val)
  if (val === '-0.01') {
    $(this).removeClass('is-invalid').removeClass('is-valid')
  } else if (parseFloat(val) >= 0 && parseFloat(val) <= 20) {
    $(this).removeClass('is-invalid').addClass('is-valid')
  } else {
    $(this).removeClass('is-valid').addClass('is-invalid')
  }
})


