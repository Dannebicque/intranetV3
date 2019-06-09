/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/rattrapages.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('click', '.rattrapage-accepte', function (e) {
  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_change_etat', {uuid: rattrapage, etat: 'A'}),
    success: function (e) {
      const bx = $('.bx_' + rattrapage)
      const parent = bx.parent()
      bx.remove()
      parent.prepend('<a href="#" class="btn btn-success btn-outline"><i class="ti-check"></i>Acceptée</a>')
      addCallout('Demande de rattrapage validée !', 'success')
    },
    error: function (e) {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('click', '.rattrapage-refuse', function (e) {
  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_change_etat', {uuid: rattrapage, etat: 'R'}),
    success: function (e) {
      const bx = $('.bx_' + rattrapage)
      const parent = bx.parent()
      bx.remove()
      parent.prepend('<a href="#" class="btn btn-warning btn-outline"><i class="ti-na"></i>Refusée</a>')
      addCallout('Demande de rattrapage refusée !', 'success')
    },
    error: function (e) {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})
