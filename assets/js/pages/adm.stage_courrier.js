// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.stage_courrier.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/06/2021 09:50

import {addCallout} from '../util'
import $ from 'jquery'
import Swal from 'sweetalert2'

let ed_courrier, ed_ETAT_STAGE_AUTORISE, ed_ETAT_STAGE_DEPOSE, ed_ETAT_STAGE_VALIDE, ed_ETAT_STAGE_REFUS,
  ed_ETAT_STAGE_INCOMPLET,
  ed_ETAT_STAGE_CONVENTION_IMPRIMEE, ed_ETAT_STAGE_CONVENTION_ENVOYEE, ed_ETAT_STAGE_CONVENTION_RECUE

// let tabEd = {}

let fields = [

  '{{civilite_court_etudiant}}',
  '{{civilite_etudiant}}',
  '{{prenom_etudiant}}',
  '{{nom_etudiant}}',
  '{{entreprise}}',
  '{{civilite_court_responsable}}',
  '{{civilite_responsable}}',
  '{{prenom_reponsable}}',
  '{{nom_responsable}}',
  '{{civilite_court_tuteur}}',
  '{{civilite_tuteur}}',
  '{{prenom_tuteur}}',
  '{{nom_tuteur}}',
  '{{civilite_court_tuteur_univ}}',
  '{{civilite_tuteur_univ}}',
  '{{prenom_tuteur_univ}}',
  '{{nom_tuteur_univ}}',
  '{{date_debut_stage}}',
  '{{date_fin_stage}}',
  '{{nom_periode_stage}}'
]
const nbfields = fields.length
let text = ''
for (let i = 0; i < nbfields; i++) {
  text = text + ' ' + fields[i]
}

function loadTinyMce ($id) {
  return tinymce.init({
    selector: '#text_' + $id,
    height: 300,
    menubar: 'publipostage',
    language: 'fr_FR',
    content_css: 'default',
    toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent',
    menu: {
      publipostage: {title: 'Champs de publipostage', items: text}
    },
    setup: function (editor) {
      for (let i = 0; i < nbfields; i++) {
        editor.ui.registry.addMenuItem(fields[i], {
          text: fields[i],
          onAction: function () {
            editor.insertContent(fields[i])
          }
        })
      }
    }
  })
}

$(document).ready(function () {
  ed_ETAT_STAGE_AUTORISE = loadTinyMce('ETAT_STAGE_AUTORISE')
  ed_ETAT_STAGE_DEPOSE = loadTinyMce('ETAT_STAGE_DEPOSE')
  ed_ETAT_STAGE_VALIDE = loadTinyMce('ETAT_STAGE_VALIDE')
  ed_ETAT_STAGE_REFUS = loadTinyMce('ETAT_STAGE_REFUS')
  ed_ETAT_STAGE_INCOMPLET = loadTinyMce('ETAT_STAGE_INCOMPLET')
  ed_ETAT_STAGE_CONVENTION_IMPRIMEE = loadTinyMce('ETAT_STAGE_CONVENTION_IMPRIMEE')
  ed_ETAT_STAGE_CONVENTION_ENVOYEE = loadTinyMce('ETAT_STAGE_CONVENTION_ENVOYEE')
  ed_ETAT_STAGE_CONVENTION_RECUE = loadTinyMce('ETAT_STAGE_CONVENTION_RECUE')
  ed_courrier = loadTinyMce('courrier')

  // tabEd = {
  //   'ed_ETAT_STAGE_AUTORISE': ed_ETAT_STAGE_AUTORISE,
  //   'ed_ETAT_STAGE_DEPOSE': ed_ETAT_STAGE_DEPOSE,
  //   'ed_ETAT_STAGE_VALIDE': ed_ETAT_STAGE_VALIDE,
  //   'ed_ETAT_STAGE_REFUS': ed_ETAT_STAGE_REFUS,
  //   'ed_ETAT_STAGE_INCOMPLET': ed_ETAT_STAGE_INCOMPLET,
  //   'ed_ETAT_STAGE_CONVENTION_IMPRIMEE': ed_ETAT_STAGE_CONVENTION_IMPRIMEE,
  //   'ed_ETAT_STAGE_CONVENTION_ENVOYEE': ed_ETAT_STAGE_CONVENTION_ENVOYEE,
  //   'ed_ETAT_STAGE_CONVENTION_RECUE': ed_ETAT_STAGE_CONVENTION_RECUE,
  //   'ed_courrier': ed_courrier
  // }
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
      message: tinymce.get('text_' + onglet).getContent(),
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
          tinymce.get('text_' + etat).setContent('')
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
