/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/scolarite.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('keyup', '#etudiant', function() {
  const $val = $(this).val()
  console.log($val);
  if ($val.length > 2) {
    $('#resultat').empty().load(Routing.generate('sa_scolarite_recherche', {needle: $val}))
  }
});
