// Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.rattrapages.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 14/11/2026 20:41
import $ from 'jquery'
import {addCallout} from '../util'
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
      const html = `<span class="btn btn-outline btn-success me-1 bx_${rattrapage}">Demande Acceptée</span>`
          + `<button data-rattrapage="${rattrapage}" class="btn btn-outline btn-danger me-1 rattrapage-refuse bx_${rattrapage}" title="Refuser / Révoquer la demande"><i class="fas fa-ban"></i></button>`
          + `<button data-rattrapage="${rattrapage}" class="btn btn-outline btn-warning me-1 rattrapage-annuler bx_${rattrapage}" title="Remettre en attente"><i class="fas fa-rotate-left"></i></button>`
      parent.prepend(html)
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
      const html = `<span class="btn btn-outline btn-danger me-1 bx_${rattrapage}">Demande Refusée</span>`
          + `<button data-rattrapage="${rattrapage}" class="btn btn-outline btn-success me-1 rattrapage-accepte bx_${rattrapage}" title="Accepter la demande"><i class="fas fa-check"></i></button>`
          + `<button data-rattrapage="${rattrapage}" class="btn btn-outline btn-warning me-1 rattrapage-annuler bx_${rattrapage}" title="Remettre en attente"><i class="fas fa-rotate-left"></i></button>`
      parent.prepend(html)
      addCallout('Demande de rattrapage refusée !', 'success')
    },
    error() {
      addCallout('Une erreur est survenue !', 'danger')
    },
  })
})

$(document).on('click', '.rattrapage-annuler', function (e) {
  e.preventDefault()
  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_change_etat', {uuid: rattrapage, etat: 'f'}),
    success() {
      const bx = $(`.bx_${rattrapage}`)
      const parent = bx.parent()
      bx.remove()
      const html = `<button data-rattrapage="${rattrapage}" class="btn btn-outline btn-success me-1 rattrapage-accepte bx_${rattrapage}" title="Accepter la demande"><i class="fas fa-check"></i></button>`
          + `<button data-rattrapage="${rattrapage}" class="btn btn-outline btn-danger me-1 rattrapage-refuse bx_${rattrapage}" title="Refuser la demande"><i class="fas fa-ban"></i></button>`
      parent.prepend(html)
      addCallout('Demande de rattrapage remise en attente !', 'success')
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
