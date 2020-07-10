// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/informations.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 10/07/2020 09:45

$(document).on('click', '.changeinformation', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('#header-title').empty().append($(this).text())
  $('.changeinformation').removeClass('active show')
  $(this).addClass('active show')
  $('#mainContent').empty().load($(this).attr('href'))
})

