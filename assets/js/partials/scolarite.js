$(document).on('keyup', '#etudiant', function() {
  var $val = $(this).val();
  console.log($val);
  if ($val.length > 2) {
    $('#resultat').empty().load(Routing.generate('sa_scolarite_recherche', {needle: $val}))
  }
});
