$(document).on('change', '.typegroupe_defaut', function (e) {
  $.ajax({
    url: Routing.generate('administration_type_groupe_defaut'),
    method: 'POST',
    data: {
      typegroupe: $(this).val()
    },
    success: function(data) {
      addCallout('Type de groupe par défaut enregistré', 'success')
    }, error: function(e){
      addCallout('Erreur lors de l\'enregistrement du type de groupe par défaut', 'danger')
    }
  })
});

$(document).on('click', '#add_type_groupe', function() {
  var $semestre = $(this).data('semestre');
  $.ajax({
    url: Routing.generate('administration_type_groupe_new'),
    method: 'POST',
    data: {
      libelle: $('#type_groupe_libelle').val(),
      semestre: $semestre,
      defaut: $('#type_groupe_defaut').prop('checked')
    },
    success: function(data) {
      $('#typgeGroupe_bloc').empty().load(Routing.generate('administration_type_groupe_refresh', {semestre: $semestre}));
      addCallout('Type de groupe ajouté', 'success')
    }, error: function(e){
      addCallout('Erreur lors de l\'ajout du type de groupe', 'danger')
    }
  })
});
