// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.etudiants.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/08/2021 12:12


$(document).on('change', '.changeEtat', function () {
  $.ajax({
    url: Routing.generate('adm_etudiant_change_etat', {uuid: $(this).data('etudiant'), etat: $(this).val()}),
    method: 'POST',
    success: function () {

    }
  })
})

$(document).on('change', '.editEtudiant', function () {
  $.ajax({
    url: Routing.generate('adm_etudiant_edit_ajax', {id: $(this).data('etudiant')}),
    method: 'POST',
    data: {
      field: $(this).data('field'),
      value: $(this).val()
    },
    success: function () {
    }
  })
})

