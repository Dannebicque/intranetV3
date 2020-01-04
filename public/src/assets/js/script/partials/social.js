/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/social.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('click', '.articleLike', function (e) {
  e.preventDefault();
  e.stopPropagation();
  const elt = $(this)

  $.ajax({
    url: Routing.generate('information_like', {slug: $(this).data('article')}),
    success: function (data) {
      console.log(elt.first())
      if (elt.children().hasClass('text-success')) {
        elt.html('<i class="ti-heart text-danger fs-11"></i> ' + data)
      } else {
        elt.html('<i class="ti-heart text-success fs-11"></i> ' + data)
      }
    }
  })
})
