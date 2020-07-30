// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/absences.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 11:18
import {addCallout} from '../util'
import '../../vendor/datatables'
import $ from 'jquery'
import {dataTableLangueFr} from '../lang/fr'

let tabsences = []

//Saisie des absences
$(document).on('click', '.absChangeTypeGroupe', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('.absChangeTypeGroupe').removeClass('btn-primary')
  $(this).addClass('btn-primary')
  $('#listeEtudiantsAbsences').load(Routing.generate('api_absence_liste_etudiant', {typegroupe: $(this).data('typegroupe')}), (function () {
    console.log('then...')
    let date = $('#absence-date')
    let heure = $('#absence-heure')
    updateAffichage(date.val(), heure.val())
  }))

})

$(document).on('change', '#absence-matiere', function () {
  let etudiants = $('.etudiant')
  let date = $('#absence-date')
  let heure = $('#absence-heure')
  etudiants.removeClass('absent')
  updateAffichage(date.val(), heure.val())
})

$(document).on('change', '#absence-date', function () {
  let etudiants = $('.etudiant')
  let date = $('#absence-date')
  let heure = $('#absence-heure')
  etudiants.removeClass('absent')
  updateAffichage(date.val(), heure.val())
})

$(document).on('change', '#absence-heure', function () {
  const etudiants = $('.etudiant')
  const date = $('#absence-date')
  const heure = $('#absence-heure')
  etudiants.removeClass('absent')
  updateAffichage(date.val(), heure.val())
})

//marquage et enregistrement des absents
$(document).on('click', '.etudiant', function () {
  const $split = $(this).attr('id').split('_')
  if ($(this).hasClass('absent')) {

    //supprimer absence
    $(this).removeClass('absent')

    $.ajax({
      type: 'POST',
      url: Routing.generate('application_personnel_absence_saisie_ajax', {
        matiere: $('#absence-matiere').val(),
        etudiant: $split[1]
      }),
      dataType: 'json',
      data: {
        date: $('#absence-date').val(),
        heure: $('#absence-heure').val(),
        action: 'suppr'
      },
      //affichage de l'erreur en cas de problème
      error: function () {
        addCallout('Erreur lors de la tentative de suppression de l\'absence !', 'danger')
      },
      success: function (data) {
        tabsences = data
        addCallout('La suppression a été effectuée avec succés !', 'success')
      }
    })
  } else {
    //marquer comme absent
    $(this).addClass('absent')
    $.ajax({
      type: 'POST',
      url: Routing.generate('application_personnel_absence_saisie_ajax', {
        matiere: $('#absence-matiere').val(),
        etudiant: $split[1]
      }),
      dataType: 'json',
      data: {
        date: $('#absence-date').val(),
        heure: $('#absence-heure').val(),
        action: 'saisie'
      },
      //affichage de l'erreur en cas de problème
      error: function (msg) {
        if (msg.responseText === 'out') {
          addCallout('Le délai pour l\'enregistrement est dépassé. Contactez le responsable de la departement', 'danger')
        } else {
          addCallout('Erreur lors de l\'enregistrement.', 'danger')
        }
      },
      success: function (data) {
        addCallout('Absence enregistrée avec succés !', 'success')
      }
    })
  }
})

$('#liste-absences').dataTable({
  'language': dataTableLangueFr,
  'fnRowCallback': function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
    if (aData[6] === 'non' || aData[6] === 'no' || aData[6] === 'No' || aData[6] === 'Non') {
      $('td', nRow).css('background-color', '#fce3e3')
    } else {
      $('td', nRow).css('background-color', '#e3fcf2')
    }
  }
})

function updateAffichage (date, heure) {
  $.ajax({
    type: 'GET',
    url: Routing.generate('application_personnel_absence_get_ajax', {matiere: $('#absence-matiere').val()}),
    dataType: 'json',
    success: function (data) {
      const t = date.split('/')
      const ddate = t[2].trim() + '-' + t[1].trim() + '-' + t[0].trim()
      if (heure.length === 4) {
        heure = '0' + heure
      }

      for (let d in data) {
        if (d == ddate) {
          if (typeof data[d][heure] !== 'undefined') {
            for (let i = 0; i < data[d][heure].length; i++) {
              $('#etu_' + data[d][heure][i]).addClass('absent')
            }
          }
        }
      }
    }
  })
}
