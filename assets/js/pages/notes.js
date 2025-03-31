import $ from 'jquery'
import Routing from 'fos-router'
import { addCallout } from '../util'

$(document).ready(function () {
  $('.savegroupe').click(function () {
    const groupe = $(this).attr('id')
    const commentaireEvaluation = $(`#commentaire_evaluation_${groupe.split('_')[1]}`).val()

    const notes = { notes: [] }
    const erreur = false

    $('.noteetudiant:input').each(function () {
      if ($(this).hasClass(groupe)) {
        const $id = $(this).data('etudiant')
        const blCommentaire = $(`#com_${$id}`)

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
      $.ajax({
        url: Routing.generate('application_personnel_note_ajax_saisie', { uuid: $(this).data('evaluation') }),
        type: 'POST',
        data: {
          notes,
          commentaireEvaluation, // Ajouter le commentaire général aux données envoyées
        },
        success(data) {
          addCallout('Les notes de <strong>ce groupe</strong> ont été enregistrées avec succès ! Vous pouvez les modifier !', 'success')
        },
        error() {
          addCallout('Une erreur est survenue pendant l\'envoi... <br>Veuillez réessayer', 'danger')
        },
      })
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
})
