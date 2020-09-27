// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.stage_courrier.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 27/09/2020 14:30

import Quill from '../quill'
import {addCallout} from '../util'
import $ from 'jquery'
import Swal from 'sweetalert2'

let ed_courrier, ed_ETAT_STAGE_AUTORISE, ed_ETAT_STAGE_DEPOSE, ed_ETAT_STAGE_VALIDE, ed_ETAT_STAGE_REFUS,
  ed_ETAT_STAGE_INCOMPLET,
  ed_ETAT_STAGE_CONVENTION_IMPRIME, ed_ETAT_STAGE_CONVENTION_ENVOYEE, ed_ETAT_STAGE_CONVENTION_RECUE

let tabEd = {}

function loadQuill ($id) {
  const options = {
    modules: {
      toolbar: {
        container: '#toolbar_' + $id,
        handlers: {
          'customsfields': function (value) {
            if (value) {
              const cursorPosition = this.quill.getSelection().index
              this.quill.insertText(cursorPosition, value)
              this.quill.setSelection(cursorPosition + value.length)
            }
          }
        }
      }
    },
    placeholder: 'Composez le corps du message... Laisser vide pour utiliser le mail par défaut.',
    theme: 'snow'
  }
  return new Quill('#text_' + $id, options)
}

$(document).ready(function () {
  ed_ETAT_STAGE_AUTORISE = loadQuill('ETAT_STAGE_AUTORISE')
  ed_ETAT_STAGE_DEPOSE = loadQuill('ETAT_STAGE_DEPOSE')
  ed_ETAT_STAGE_VALIDE = loadQuill('ETAT_STAGE_VALIDE')
  ed_ETAT_STAGE_REFUS = loadQuill('ETAT_STAGE_REFUS')
  ed_ETAT_STAGE_INCOMPLET = loadQuill('ETAT_STAGE_INCOMPLET')
  ed_ETAT_STAGE_CONVENTION_IMPRIME = loadQuill('ETAT_STAGE_CONVENTION_IMPRIME')
  ed_ETAT_STAGE_CONVENTION_ENVOYEE = loadQuill('ETAT_STAGE_CONVENTION_ENVOYEE')
  ed_ETAT_STAGE_CONVENTION_RECUE = loadQuill('ETAT_STAGE_CONVENTION_RECUE')
  ed_courrier = loadQuill('courrier')

  tabEd = {
    'ed_ETAT_STAGE_AUTORISE': ed_ETAT_STAGE_AUTORISE,
    'ed_ETAT_STAGE_DEPOSE': ed_ETAT_STAGE_DEPOSE,
    'ed_ETAT_STAGE_VALIDE': ed_ETAT_STAGE_VALIDE,
    'ed_ETAT_STAGE_REFUS': ed_ETAT_STAGE_REFUS,
    'ed_ETAT_STAGE_INCOMPLET': ed_ETAT_STAGE_INCOMPLET,
    'ed_ETAT_STAGE_CONVENTION_IMPRIME': ed_ETAT_STAGE_CONVENTION_IMPRIME,
    'ed_ETAT_STAGE_CONVENTION_ENVOYEE': ed_ETAT_STAGE_CONVENTION_ENVOYEE,
    'ed_ETAT_STAGE_CONVENTION_RECUE': ed_ETAT_STAGE_CONVENTION_RECUE,
    'ed_courrier': ed_courrier
  }
})

$(document).on('click', '.enregistreModeleMail', function () {
  const etat = $(this).data('type')
  const onglet = $(this).data('ed')

  $.ajax({
    url: Routing.generate('administration_stage_periode_courrier_sauvegarde_modele', {
      uuid: $(this).data('periode'),
      mail: etat
    }),
    method: 'POST',
    data: {
      message: tabEd['ed_' + onglet].getText(),
      sujet: $('#sujet_' + etat).val()
    },
    success: function () {
      addCallout('Modèle enregistré !', 'success')
    }
  })
})

$(document).on('click', '.resetDefaut', function (e) {
  e.preventDefault()
  let etat = $(this).data('type')
  let periode = $(this).data('periode')

  Swal.fire({
    title: 'Confirmer le retour au message par défaut ?',
    text: 'L\'opération ne pourra pas être annulée.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, je confirme',
    cancelButtonText: 'Non, Annuler',
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-secondary'
    },
    buttonsStyling: false
  }).then(function (result) {
    if (result.value) {
      $.ajax({
        url: Routing.generate('administration_stage_periode_courrier_reset', {id: periode, etat: etat}),
        type: 'POST',
        success: function () {
          tabEd['ed_' + etat].setText('')
          addCallout('Suppression effectuée avec succès, retour au message par défaut', 'success')
          Swal.fire({
            title: 'Message réinitialisé!',
            text: 'Le message par défaut sera maintenant utilisé.',
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary',
              cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
          })
        },
        error: function (xhr, ajaxOptions, thrownError) {
          Swal.fire({
            title: 'Erreur lors de la suppression!',
            text: 'Merci de renouveler l\'opération',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary',
              cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
          })
          addCallout('Erreur lors de la tentative de suppression', 'danger')
        }
      })

    } else if (
      // Read more about handling dismissals
      result.dismiss === 'cancel'
    ) {
      Swal.fire({
        title: 'Cancelled',
        text: 'OK! Tout est comme avant !',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-secondary'
        },
        buttonsStyling: false
      })
    }
  })
})
