/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/etudiants.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

const table = $('#datatableEtudiants').DataTable({})
table.clear(); //effacer le datatable
table.destroy(); //supprimer le datatable

$('#datatableEtudiants').DataTable({
  "language": langueFr,
  "processing": true,
  "serverSide": true,
  "ajax": Routing.generate('api_etudiant_departement'),
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
    const newgroupe = $(this).val()
    const oldgroupe = '#' + $(this).attr('name') + '_old'

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

