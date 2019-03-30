$(document).on('change', '.departementParDefaut', function(e){
  $.ajax({
    url: Routing.generate('user_change_departement_defaut'),
    data: {
      departement: $(this.val())
    },
    method: 'POST',
    success: function(e) {
      addCallout('Mofification enregistrée !', 'success')
    },
    error: function(e) {
      addCallout('Erreur lors de la sauvegarde de la modification !', 'danger')
    }

  })
});
