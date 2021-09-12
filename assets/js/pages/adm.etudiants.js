// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.etudiants.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/09/2021 18:06


$(document).on('change', '.changeEtat', function () {
  $.ajax({
    url: Routing.generate('adm_etudiant_change_etat', {uuid: $(this).data('etudiant'), etat: $(this).val()}),
    method: 'POST',
    success: function () {

    }
  })
})


