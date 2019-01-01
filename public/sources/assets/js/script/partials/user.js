$(document).on('change', '.formationParDefaut', function(e){
  $.ajax({
    url: Routing.generate('user_change_formation_defaut'),
    data: {
      formation: $(this.val())
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
