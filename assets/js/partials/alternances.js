$(document).on('change', '#tuteurUniversitaire', function (e) {
  $.ajax({
    url: Routing.generate('administration_alternance_update_tuteur_universitaire', {alternance: $(this).data('alternance'), personnel: $(this).val()}),
    success: function (e) {
      addCallout('Justificatif d\'absence refusé !', 'success')
    },
    error: function (e) {
      addCallout('Une erreur est survenue !', 'danger')
    }
  }) 
})
