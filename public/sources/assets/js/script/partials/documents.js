$(document).on('click', '.afficheDocuments', function() {
  $('#zone_document').empty().load(Routing.generate('document_ajax', {typedocument: $(this).data('type')}));
  $('#boutonBack').show();
});

$(document).on('click', '#boutonBack', function() {
  $('#zone_document').empty().load(Routing.generate('typedocument_ajax'));
  $('#boutonBack').hide();
});