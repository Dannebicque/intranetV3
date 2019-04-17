/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/documents.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('click', '.afficheDocuments', function() {
  $('#zone_document').empty().load(Routing.generate('document_ajax', {typedocument: $(this).data('type')}));
  $('#boutonBack').show();
});

$(document).on('click', '#boutonBack', function() {
  $('#zone_document').empty().load(Routing.generate('typedocument_ajax'));
  $('#boutonBack').hide();
});
