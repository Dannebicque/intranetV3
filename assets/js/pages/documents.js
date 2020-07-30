// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/documents.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 13:04

$(document).on('click', '.afficheDocuments', function() {
  let $type = $(this).data('type')
  if ($type === 'favori') {
    $('#zone_document').empty().load(Routing.generate('document_ajax_favori'))
  } else {
    $('#zone_document').empty().load(Routing.generate('document_ajax', {typedocument: $type}))
  }
  $('#boutonBack').show()
});

$(document).on('click', '#boutonBack', function () {
  $('#zone_document').empty().load(Routing.generate('typedocument_ajax'))
  $('#boutonBack').hide()
})

$(document).on('click', '.addFavori', function () {
  $.ajax({
    url: Routing.generate('document_add_favori', {document: $(this).data('document')}),
    method: 'post',
    success: function (data) {
      if (data === 'add') {
        addCallout('Document ajouté à vos favoris', 'success')
      } else {
        addCallout('Document retiré de vos favoris', 'success')
      }
    },
    error: function () {
      addCallout('Erreur lors de la gestion de vos documents favoris', 'danger')
    }
  })
})
