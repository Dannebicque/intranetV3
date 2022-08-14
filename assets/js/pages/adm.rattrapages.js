// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.rattrapages.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import { addCallout } from '../util'
import Routing from 'fos-router'

$(document).on('click', '.rattrapage-accepte', function (e) {
  e.preventDefault()
  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_change_etat', { uuid: rattrapage, etat: 'a' }),
    success() {
      const bx = $(`.bx_${rattrapage}`)
      const parent = bx.parent()
      bx.remove()
      parent.prepend('<a href="#" class="btn btn-success btn-outline"><i class="ti-check"></i>Acceptée</a>')
      addCallout('Demande de rattrapage validée !', 'success')
    },
    error() {
      addCallout('Une erreur est survenue !', 'danger')
    },
  })
})

$(document).on('click', '.rattrapage-refuse', function (e) {
  e.preventDefault()
  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_change_etat', { uuid: rattrapage, etat: 'r' }),
    success() {
      const bx = $(`.bx_${rattrapage}`)
      const parent = bx.parent()
      bx.remove()
      parent.prepend('<a href="#" class="btn btn-warning btn-outline"><i class="ti-na"></i>Refusée</a>')
      addCallout('Demande de rattrapage refusée !', 'success')
    },
    error() {
      addCallout('Une erreur est survenue !', 'danger')
    },
  })
})

$(document).on('change', '.dateChange', function () {
  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_planning_change', { uuid: rattrapage, type: 'date' }),
    data: {
      data: $(this).val(),
    },
    method: 'POST',
    error() {
      addCallout('Une erreur est survenue !', 'danger')
    },
  })
})

$(document).on('blur', '.salleChange', function () {
  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_planning_change', { uuid: rattrapage, type: 'salle', data: $(this).val() }),
    error(e) {
      addCallout('Une erreur est survenue !', 'danger')
    },
  })
})

$(document).on('blur', '.heureChange', function () {
  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_planning_change', { uuid: rattrapage, type: 'heure', data: $(this).val() }),
    error() {
      addCallout('Une erreur est survenue !', 'danger')
    },
  })
})

$(document).on('click', '#sallePartout', () => {
  const salle = $('#salle').val()
  $.ajax({
    // sauvegarde de la salle pour les rattrapages du diplôme
    url: Routing.generate('administration_rattrapage_update_global', { type: 'salle', diplome }),
    data: {
      valeur: salle,
    },
    method: 'POST',
    success() {
      $('.salleChange').each(function () {
        $(this).val(salle)
      })
    },
  })
})

$(document).on('click', '#datePartout', (e) => {
  e.preventDefault()
  const date = $('#date').val()
  $.ajax({
    // sauvegarde de la salle pour les rattrapages du diplôme
    url: Routing.generate('administration_rattrapage_update_global', { type: 'date', diplome }),
    data: {
      valeur: date,
    },
    method: 'POST',
    success() {
      $('.dateChange').each(function () {
        $(this).val(date)
      })
    },
  })
})

$(document).on('click', '#heurePartout', (e) => {
  e.preventDefault()
  const heure = $('#heure').val()
  $.ajax({
    // sauvegarde de la salle pour les rattrapages du diplôme
    url: Routing.generate('administration_rattrapage_update_global', { type: 'heure', diplome }),
    data: {
      valeur: heure,
    },
    method: 'POST',
    success() {
      $('.heureChange').each(function () {
        $(this).val(heure)
      })
    },
  })
})
