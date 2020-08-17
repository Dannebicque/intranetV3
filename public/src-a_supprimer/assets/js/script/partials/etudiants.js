// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/public/src-a_supprimer/assets/js/script/partials/etudiants.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 22/07/2020 15:04




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

