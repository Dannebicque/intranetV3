var table = $('#tableJustifier').DataTable({
  retrieve: true
});

$(document).on('change', '#justifier_etudiant', function (e) {
  $.ajax({
    url: Routing.generate('administration_absences_liste_absence_etudiant.fr', {etudiant: $(this).val()}),
    //dataType: 'json',
    success: function (e) {
      console.log('ok');
      //var table = $('#tableJustifier').DataTable({});
      // table.clear(); //effacer le datatable
      // table.destroy(); //supprimer le datatable
      table.rows().remove();
      jQuery.each(data, function (index, etudiant) {
        table.row.add([1, 2, '<a href="" class="btn btn-danger supprimer"><i class="ti-close"></i></a>']).draw();
      });


    }
  })
});