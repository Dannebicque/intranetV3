// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/documents.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/11/2019 19:40

$(document).on('click', '.afficheDocuments', function() {
  $('#zone_document').empty().load(Routing.generate('document_ajax', {typedocument: $(this).data('type')}));
  $('#boutonBack').show();
});

$(document).on('click', '#boutonBack', function() {
  $('#zone_document').empty().load(Routing.generate('typedocument_ajax'));
  $('#boutonBack').hide();
});
