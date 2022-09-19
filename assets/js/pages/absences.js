// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/absences.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/09/2022 19:28
import $ from 'jquery'
import { addCallout } from '../util'
import Routing from 'fos-router'
import { post } from '../fetch'

let tabsences = []

function updateAffichage(date, _heure) {
  let heure = _heure
  $.ajax({
    type: 'GET',
    url: Routing.generate('application_personnel_absence_get_ajax', { matiere: $('#absence-matiere').val() }),
    dataType: 'json',
    success(data) {
      // const t = date.split('/')
      // const ddate = t[2].trim() + '-' + t[1].trim() + '-' + t[0].trim()
      if (heure.length === 4) {
        heure = `0${heure}`
      }

      for (const d in data) {
        if (d == date) {
          if (typeof data[d][heure] !== 'undefined') {
            for (let i = 0; i < data[d][heure].length; i++) {
              $(`#etu_${data[d][heure][i]}`).addClass('absent')
            }
          }
        }
      }
    },
  })
}

// Saisie des absences
$(document).on('click', '.absChangeTypeGroupe', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('.absChangeTypeGroupe').removeClass('btn-primary')
  $(this).addClass('btn-primary')
  $('#listeEtudiantsAbsences').load(Routing.generate('api_absence_liste_etudiant', { typegroupe: $(this).data('typegroupe') }), (() => {
    const date = $('#absence-date')
    const heure = $('#absence-heure')
    updateAffichage(date.val(), heure.val())
  }))
})

$(document).on('change', '#absence-matiere', function () {
  const etudiants = $('.etudiant')
  const date = $('#absence-date')
  const heure = $('#absence-heure')
  document.getElementById('text-matiere').innerText = $(this).find(':selected').text().trim()
  etudiants.removeClass('absent')
  updateAffichage(date.val(), heure.val())
})

$(document).on('change', '#absence-date', () => {
  const etudiants = $('.etudiant')
  const date = $('#absence-date')
  const heure = $('#absence-heure')
  etudiants.removeClass('absent')
  updateAffichage(date.val(), heure.val())
})

$(document).on('change', '#absence-heure', () => {
  const etudiants = $('.etudiant')
  const date = $('#absence-date')
  const heure = $('#absence-heure')
  etudiants.removeClass('absent')
  updateAffichage(date.val(), heure.val())
})

// marquage et enregistrement des absents
$(document).on('click', '.etudiant', function () {
  if ($('#absence-heure').val() === '') {
    alert('Veuillez saisir une heure')
  } else {
    const $split = $(this).attr('id').split('_')
    if ($(this).hasClass('absent')) {
    // supprimer absence
      $(this).removeClass('absent')
      // todo: tester si heure n'est pas vide.
      $.ajax({
        type: 'POST',
        url: Routing.generate('application_personnel_absence_saisie_ajax', {
          matiere: $('#absence-matiere').val(),
          etudiant: $split[1],
        }),
        dataType: 'json',
        data: {
          date: $('#absence-date').val(),
          heure: $('#absence-heure').val(),
          action: 'suppr',
        },
        // affichage de l'erreur en cas de problème
        error() {
          addCallout('Erreur lors de la tentative de suppression de l\'absence !', 'danger')
        },
        success(data) {
          tabsences = data
          addCallout('La suppression a été effectuée avec succés !', 'success')
        },
      })
    } else {
    // marquer comme absent
      $(this).addClass('absent')
      $.ajax({
        type: 'POST',
        url: Routing.generate('application_personnel_absence_saisie_ajax', {
          matiere: $('#absence-matiere').val(),
          etudiant: $split[1],
        }),
        dataType: 'json',
        data: {
          date: $('#absence-date').val(),
          heure: $('#absence-heure').val(),
          action: 'saisie',
        },
        // affichage de l'erreur en cas de problème
        error(msg) {
          if (msg.responseText === 'out') {
            addCallout('Le délai pour l\'enregistrement est dépassé. Contactez le responsable de la departement', 'danger')
          } else {
            addCallout('Erreur lors de l\'enregistrement.', 'danger')
          }
        },
        success() {
          addCallout('Absence enregistrée avec succés !', 'success')
        },
      })
    }
  }
})

window.addEventListener('load', () => { // le dom est chargé
  updateAffichage($('#absence-date').val(), $('#absence-heure').val())
  document.querySelectorAll('.pasabsent').forEach((elem) => {
    elem.addEventListener('click', (e) => {
      post(Routing.generate('app_personnel_absence_etat_appel'), {
        date: document.querySelector('#absence-date').value,
        heure: document.querySelector('#absence-heure').value,
        groupe: e.target.dataset.groupe,
        matiere: document.querySelector('#absence-matiere').value,
      })
        .then((data) => {
          // Handle data
          if (data === true) {
            e.target.textContent = 'Vous avez indiqué qu\'il n\'y a pas d\'absent dans ce groupe.'
            addCallout('Saisie enregistée avec succès.', 'success')
          } else {
            addCallout('Vous avez déjà effectué une saisie.', 'warning')
          }
        }).catch(() => {
        // Handle error
          addCallout('Erreur lors de l\'enregistrement.', 'error')
        })
    })
  })
})
