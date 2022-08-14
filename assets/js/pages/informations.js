// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/informations.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import Routing from 'fos-router'

$(document).on('click', '.changeinformation', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('#header-title').empty().append($(this).text())
  $('.changeinformation').removeClass('active show')
  $(this).addClass('active show')
  $('#mainContent').empty().load($(this).attr('href'))
})

$(document).on('click', '.addLike', function () {
  const $call = $(this).parent().find('span')
  $.ajax({
    url: Routing.generate('information_like', { slug: $(this).data('article') }),
    method: 'post',
    success(data) {
      $call.text(data)
    },
    error() {
      addCallout('Erreur lors de la gestion de vos articles favoris', 'danger')
    },
  })
})
