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
