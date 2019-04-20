/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/user.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('change', '.departementParDefaut', function(e){
  $.ajax({
    url: Routing.generate('user_change_departement_defaut', {departement: $(this).val()}),
    method: 'POST',
    success: function(e) {
      addCallout('Mofification enregistrée !', 'success')
    },
    error: function(e) {
      addCallout('Erreur lors de la sauvegarde de la modification !', 'danger')
    }

  })
});
