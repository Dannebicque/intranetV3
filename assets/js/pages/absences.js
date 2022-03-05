// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/absences.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/09/2021 20:58
import {addCallout} from '../util'

import {post} from '../fetch'

let tabsences = []

//Saisie des absences
$(document).on('click', '.absChangeTypeGroupe', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('.absChangeTypeGroupe').removeClass('btn-primary')
  $(this).addClass('btn-primary')
  $('#listeEtudiantsAbsences').load(Routing.generate('api_absence_liste_etudiant', {typegroupe: $(this).data('typegroupe')}), (function () {
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
  if ($('#absence-heure').val() === '') {
    alert('Veuillez saisir une heure')
  } else {
  const $split = $(this).attr('id').split('_')
  if ($(this).hasClass('absent')) {
    //supprimer absence
    $(this).removeClass('absent')
    //todo: tester si heure n'est pas vide.
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
      success: function () {
        addCallout('Absence enregistrée avec succés !', 'success')
      }
    })
  }
  }
})

function updateAffichage (date, heure) {
  $.ajax({
    type: 'GET',
    url: Routing.generate('application_personnel_absence_get_ajax', {matiere: $('#absence-matiere').val()}),
    dataType: 'json',
    success: function (data) {
      // const t = date.split('/')
      // const ddate = t[2].trim() + '-' + t[1].trim() + '-' + t[0].trim()
      if (heure.length === 4) {
        heure = '0' + heure
      }

      for (let d in data) {
        if (d == date) {
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

window.addEventListener('load', function () { //le dom est chargé
  document.querySelectorAll('.pasabsent').forEach((elem) => {
    elem.addEventListener('click', (e) => {
      post(Routing.generate('app_personnel_absence_etat_appel'), {
        date: document.querySelector('#absence-date').value,
        heure: document.querySelector('#absence-heure').value,
        groupe: e.target.dataset.groupe,
        matiere: document.querySelector('#absence-matiere').value
      })
        .then(data => {
          // Handle data
          if (data === true) {
            e.target.textContent = 'Vous avez indiqué qu\'il n\'y a pas d\'absent dans ce groupe.'
            addCallout('Saisie enregistée avec succès.', 'success')
          } else {
            addCallout('Vous avez déjà effectué une saisie.', 'warning')
          }
        }).catch(error => {
        // Handle error
        addCallout('Erreur lors de l\'enregistrement.', 'error')

      })
    })
  })
})
