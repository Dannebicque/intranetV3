$(document).on('change', '#tuteurUniversitaire', function () {
  $.ajax({
    url: Routing.generate('administration_alternance_update_tuteur_universitaire', {alternance: $(this).data('alternance'), personnel: $(this).val()}),
    success: function () {
      addCallout('Justificatif d\'absence refusé !', 'success')
    },
    error: function () {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('click', '.initAllAlternance', function (e) {
  e.preventDefault();
  const url = $(this).attr('href')

  swal({
    title: 'Etes vous sûr?',
    text: "Vous allez initialiser tous les suivis d'alternances. Cela effacera les données déjà présente. !",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, initialiser!',
    cancelButtonText: 'Non, ne rien faire!',
    confirmButtonClass: 'btn btn-primary',
    cancelButtonClass: 'btn btn-secondary',
    buttonsStyling: false
  }).then(function (result) {
    if (result.value) {
      $.ajax({
        url: url,
        type: "POST",
        success: function () {
          addCallout('Initialisation effectuée avec succès', 'success')
          swal(
            'Initialisé!',
            'Toutes les fiches des alertnants ont été initialisées.',
            'success'
          )
        },
        error: function () {
          swal("Error deleting!", "Please try again", "error");
          addCallout('Erreur lors de la tentative d\'initialisation', 'danger')
        }
      });

    } else if (
      // Read more about handling dismissals
      result.dismiss === 'cancel'
    ) {
      swal(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
});
