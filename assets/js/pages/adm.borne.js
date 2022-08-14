// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.borne.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import { addCallout } from '../util'
import Routing from 'fos-router'

$(document).on('click', '.visibiliteBorne', function () {
  const btn = $(this)
  $.ajax({
    url: Routing.generate('administration_borne_visibilite', { id: btn.data('id') }),
    success(data) {
      if (data === false) {
        addCallout('Message masqué avec succés !', 'success')
        btn.removeClass('btn-success').addClass('btn-danger')
        btn.children('i').removeClass('fa-eye').addClass('fa-eye-slash')
        btn.attr('title', 'Message masqué. Rendre visible')
      } else {
        addCallout('Message affiché avec succés !', 'success')
        btn.removeClass('btn-danger').addClass('btn-success')
        btn.children('i').removeClass('fa-eye-slash').addClass('fa-eye')
        btn.attr('title', 'Message affiché. Rendre invisible')
      }
    },
  })
})
