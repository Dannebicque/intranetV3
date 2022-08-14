// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.etudiant_groupe.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import Routing from 'fos-router'

$(document).on('click', '.admChangeTypeGroupe', function () {
  $('.admChangeTypeGroupe').removeClass('btn-primary')
  $(this).addClass('btn-primary')
  $('#listeEtudiantsGroupes').empty().load(Routing.generate('administration_etudiant_groupe_affecte', { typeGroupe: $(this).data('typegroupe') }))
})

$(document).on('click', '.changegroupe', function () {
  if ($(this).is(':checked')) {
    const newgroupe = $(this).val()
    const oldgroupe = `#${$(this).attr('name')}_old`

    $.ajax(
      {
        url: Routing.generate('administration_etudiant_groupe_change'),
        type: 'POST',
        data: {
          id: `${$(this).attr('name')}-${$(this).val()}`,
          typegroupe: $('#autocom').val(),
          oldgroupe: $(oldgroupe).val(),
        },
        success() {
          $(oldgroupe).val(newgroupe)
        },
      },
    )
  }
})
