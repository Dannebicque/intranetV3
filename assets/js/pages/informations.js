// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/informations.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 13:46

$(document).on('click', '.changeinformation', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('#header-title').empty().append($(this).text())
  $('.changeinformation').removeClass('active show')
  $(this).addClass('active show')
  $('#mainContent').empty().load($(this).attr('href'))
})

$(document).on('click', '.addLike', function () {
  let $call = $(this).parent().find('span')
  $.ajax({
    url: Routing.generate('information_like', {slug: $(this).data('article')}),
    method: 'post',
    success: function (data) {
      $call.text(data)
    },
    error: function () {
      addCallout('Erreur lors de la gestion de vos articles favoris', 'danger')
    }
  })
})
