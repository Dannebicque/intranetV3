/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/rattrapages.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('click', '.rattrapage-accepte', function (e) {
  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_change_etat', {uuid: rattrapage, etat: 'A'}),
    success: function (e) {
      const bx = $('.bx_' + rattrapage)
      const parent = bx.parent()
      bx.remove()
      parent.prepend('<a href="#" class="btn btn-success btn-outline"><i class="ti-check"></i>Acceptée</a>')
      addCallout('Demande de rattrapage validée !', 'success')
    },
    error: function (e) {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('click', '.rattrapage-refuse', function (e) {
  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_change_etat', {uuid: rattrapage, etat: 'R'}),
    success: function (e) {
      const bx = $('.bx_' + rattrapage)
      const parent = bx.parent()
      bx.remove()
      parent.prepend('<a href="#" class="btn btn-warning btn-outline"><i class="ti-na"></i>Refusée</a>')
      addCallout('Demande de rattrapage refusée !', 'success')
    },
    error: function (e) {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})


$(document).on('change', '.dateChange', function (e) {
  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_planning_change', {uuid: rattrapage, type: 'date'}),
    data: {
      data: $(this).val()
    },
    method: 'POST',
    success: function (e) {
      //todo:...
    },
    error: function (e) {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('blur', '.salleChange', function (e) {
  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_planning_change', {uuid: rattrapage, type: 'salle', data: $(this).val()}),
    success: function (e) {
      //todo:...
    },
    error: function (e) {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('blur', '.heureChange', function (e) {
  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_planning_change', {uuid: rattrapage, type: 'heure', data: $(this).val()}),
    success: function (e) {
      //todo:...
    },
    error: function (e) {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('click', '#sallePartout', function () {
  const salle = $('#salle').val()
  $.ajax({
    //sauvegarde de la salle pour les rattrapages du diplôme
    url: Routing.generate('administration_rattrapage_update_global', {type: 'salle', diplome:diplome}),
    data: {
      valeur: salle
    },
    method: 'POST',
    success: function (e) {
      $('.salleChange').each(function() {
        $(this).val(salle)
      })
    }
  })
})

$(document).on('click', '#datePartout', function () {
  const date = $('#date').val()
  $.ajax({
    //sauvegarde de la salle pour les rattrapages du diplôme
    url: Routing.generate('administration_rattrapage_update_global', {type: 'date', diplome:diplome}),
    data: {
      valeur: date
    },
    method: 'POST',
    success: function (e) {
      $('.dateChange').each(function() {
        $(this).val(date)
      })
    }
  })
})

$(document).on('click', '#heurePartout', function () {
  const heure = $('#heure').val()
  $.ajax({
    //sauvegarde de la salle pour les rattrapages du diplôme
    url: Routing.generate('administration_rattrapage_update_global', {type: 'heure', diplome:diplome}),
    data: {
      valeur: heure
    },
    method: 'POST',
    success: function (e) {
      $('.heureChange').each(function() {
        $(this).val(heure)
      })
    }
  })
})
