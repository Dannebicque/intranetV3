$(document).on('change', '#tuteurUniversitaire', function () {
  $.ajax({
    url: Routing.generate('administration_stage_etudiant_change_tuteur', {stageEtudiant: $(this).data('stage'), tuteur: $(this).val()}),
    success: function () {
      addCallout('Tuteur universitaire modifié !', 'success')
    }
  })
})
