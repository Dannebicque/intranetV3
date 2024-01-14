// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/notes.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 14/01/2024 15:51
import $ from 'jquery'
import Routing from 'fos-router'
import { addCallout } from '../util'

$('.savegroupe').click(function () {
  const groupe = $(this).attr('id')
  const notes = { notes: [] }
  const erreur = false
  $('.noteetudiant:input').each(function () {
    if ($(this).hasClass(groupe)) // vérifier que c'est le groupe concerné
    {
      const $id = $(this).data('etudiant')
      const blCommentaire = $(`#com_${$id}`)
      // if (blCommentaire.val().length > 255) {
      //   erreur = true
      //   blCommentaire.addClass('is-invalid')
      // }

      const obj = {
        id: $id,
        note: $(this).val(),
        absence: $(`#abs_${$id}`).prop('checked'),
        commentaire: blCommentaire.val(),
      }

      notes.notes.push(obj)
    }
  })
  if (erreur === false) {
    $.ajax(
      {
        url: Routing.generate('application_personnel_note_ajax_saisie', { uuid: $(this).data('evaluation') }),
        type: 'POST',
        data: {
          notes,
        },
        success(data) {
          addCallout('Les notes de <strong>ce groupe</strong> ont été enregistrées avec succés ! Vous pouvez les modifier !', 'success')
          // feature: supprimer le "orange" sur les notes sauvegardées. Peut être récupérer en data les notes.
        },
        error() {
          addCallout('Une erreur est survenue pendant l\'envoi... <br>Veuillez réessayer', 'danger')
          // feature: être plus précis ?
        },
      },
    )
  } else {
    addCallout('Le formulaire contient des erreurs. Veuillez corriger et valider de nouveau', 'danger')
  }
})

$(document).on('keyup', '.noteetudiant', function (e) {
  const val = $(this).val()
  if (val === '-0.01') {
    $(this).removeClass('is-invalid').removeClass('is-valid')
  } else if (parseFloat(val) >= 0 && parseFloat(val) <= 20) {
    $(this).removeClass('is-invalid').addClass('is-valid')
  } else {
    $(this).removeClass('is-valid').addClass('is-invalid')
  }
})
