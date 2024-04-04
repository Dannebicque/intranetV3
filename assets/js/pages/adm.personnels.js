// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.personnels.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/04/2024 11:50
import $ from 'jquery'
import Routing from 'fos-router'
import { addCallout } from '../util'

$(document).on('change', '.updateRole', function () {
  $.ajax({
    url: Routing.generate('administration_personnel_departement_modifier_droit', { personnel: $('#personnel').val() }),
    method: 'POST',
    data: { droit: $(this).val() },
    success() {
      addCallout('Droits modifiés !', 'success')
    },
  })
})
