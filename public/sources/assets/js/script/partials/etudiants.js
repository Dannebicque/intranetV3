var table = $('#datatableEtudiants').DataTable({});
table.clear(); //effacer le datatable
table.destroy(); //supprimer le datatable

$('#datatableEtudiants').DataTable({
  "language": langueFr,
  "processing": true,
  "serverSide": true,
  "ajax": Routing.generate('api_etudiant_formation'),
  "sAjaxDataProp": "data",
  //"pageLength": 25,
  "columns": [
    {"data": "numetudiant"},
    {"data": "nom"},
    {"data": "prenom"},
    {"data": "semestre"},
    {"data": "profil"}]
});


$(document).on('click', '.admChangeTypeGroupe', function() {
  $('.admChangeTypeGroupe').removeClass('btn-primary');
  $(this).addClass('btn-primary')
  $('#listeEtudiantsGroupes').empty().load(Routing.generate('administration_etudiant_groupe_affecte',{typeGroupe: $(this).data('typegroupe')}));
});

$(document).on( 'click', '.changegroupe', function() {
  if($(this).is(':checked')) {
    var newgroupe = $(this).val();
    var oldgroupe = '#' + $(this).attr('name') + "_old";

    console.log(oldgroupe);
    $.ajax(
      {
        url: Routing.generate('administration_etudiant_groupe_change'),
        type: 'POST',
        data: {
          id: $(this).attr('name') + '-' + $(this).val(),
          typegroupe: $('#autocom').val(),
          oldgroupe: $(oldgroupe).val()
        },
        success: function (data) {
          $(oldgroupe).val(newgroupe);
        }
      });
  }
});

