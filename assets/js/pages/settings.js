// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/settings.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 20/07/2020 10:33
import {addCallout} from '../util'

$(document).on('change', '.departementParDefaut', function (e) {
  $.ajax({
    url: Routing.generate('user_change_departement_defaut', {departement: $(this).val()}),
    method: 'POST',
    success: function (e) {
      addCallout('Mofification enregistrée !', 'success')
    },
    error: function (e) {
      addCallout('Erreur lors de la sauvegarde de la modification !', 'danger')
    }
  })
});

