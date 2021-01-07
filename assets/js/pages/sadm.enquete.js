// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/sadm.enquete.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/01/2021 15:59

$(document).on('click', '.validConfiguration', function () {
  let inputs = document.getElementsByName('config_' + $(this).data('section') + '[]')
  let previs = []
  inputs.forEach(function (input) {

    if (input.checked == true) {
      previs.push(input.value)
    }
  })

  $.ajax({
    url: Routing.generate('administratif_enquete_config_ajax_save', {section: $(this).data('section')}),
    data: {
      previs: previs
    },
    method: 'POST',
    success: function () {
      console.log('ok')
    }
  })

})


