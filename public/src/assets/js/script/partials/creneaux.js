/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/creneaux.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('click', '#btn_creneau_add', function(){
  var $annee = $('#change_annee_universitiare_temp').val()
  $.ajax({
    method:'POST',
    data: {
      anneeUniversitaire: $annee,
      jour:$('#creneau_jour').val(),
      debut:$('#creneau_debut').val(),
      fin:$('#creneau_fin').val()
    },
    url: Routing.generate('administration_creneau_cours_new'),
    success: function() {
      $('#liste_creneaux').empty().load(Routing.generate('administration_creneau_cours_liste', {annee_universitaire: $annee}));
      addCallout('Créneau ajouté avec succès', 'success')
    },
    error: function() {
      addCallout('Erreur lors de l\'ajout du créneau', 'danger')
    }
  })
});

$(document).on('click', '.bloquercreneau', function(){
  var $cr = $(this)
  console.log('click')
  if ($cr.hasClass('bloquercreneau_eviter')) {
    updateCreneau('dispo', $cr.data('creneau'), $cr.data('semaine'));
    $cr.removeClass('bloquercreneau_eviter')
  } else if($cr.hasClass('bloquercreneau_interdit')) {
    $cr.removeClass('bloquercreneau_interdit')
    $cr.addClass('bloquercreneau_eviter')
    updateCreneau('au', $cr.data('creneau'), $cr.data('semaine'));
  } else {
    $cr.addClass('bloquercreneau_interdit')
    updateCreneau('va', $cr.data('creneau'), $cr.data('semaine'));
  }
})

$(document).on('click', '.creneau', function () {
  var interdit = $('#nb_interdit')
  var eviter = $('#nb_eviter')
  var dispo = $('#nb_dispo')
  var heure = $(this).data('heure')
  var jour = $(this).dataAttr('jour')

  var nb_interdit = parseInt(interdit.text())
  var nb_eviter = parseInt(eviter.text())
  var nb_dispo = parseInt(dispo.text())

  if ($(this).hasClass('bloquercreneau_interdit')) {
    $(this).removeClass('bloquercreneau_interdit')
    $(this).addClass('bloquercreneau_eviter')
    nb_interdit--
    nb_eviter++
    updateDisponibilite(jour, heure,'E')
  } else if ($(this).hasClass('bloquercreneau_eviter')) {
    $(this).removeClass('bloquercreneau_eviter')
    nb_eviter--
    nb_dispo++
    updateDisponibilite(jour, heure,'D')
  } else {

    $(this).addClass('bloquercreneau_interdit')
    nb_interdit++
    nb_dispo--
    updateDisponibilite(jour, heure,'I')
  }

  interdit.text(nb_interdit)
  eviter.text(nb_eviter)
  dispo.text(nb_dispo)
})

function updateDisponibilite($jour, $heure, $etat){
  $.ajax({
    url: Routing.generate('application_personnel_disponibilite_update'),
    data:{
      jour: $jour,
      heure: $heure,
      etat: $etat
    },
    method: 'POST'
  })
}

function updateCreneau($type, $cr, $semaine){
  $.ajax({
    url: Routing.generate('administration_creneau_bloque_modifie_etat'),
    data:{
      creneau: $cr,
      type: $type,
      semaine: $semaine
    },
    method: 'POST'
  })
}
