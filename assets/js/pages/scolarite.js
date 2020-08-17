// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/scolarite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/08/2020 15:05


import {addCallout} from '../util'

$(document).on('change', '#scolarite_semestre', function () {
  $.ajax({
    url: Routing.generate('administration_scolarite_ues_semestre', {semestre: $(this).val()}),
    type: 'POST',
    success: function (data) {
      let $html = '<div class="row">'
      for (var key in data) {
        let value = data[key]
        $html = $html + '<div class="col-sm-12 col-md-4">'
        $html = $html + '<div class="form-group"><label for="ue_' + key + '" class="required">UE ' + value + '</label><input type="text" id="ue_' + key + '" name="ue_' + key + '" required="required" class="form-control" value="0"></div>'
        $html = $html + '</div>'
      }
      $html = $html + '</div>'
      const idUE = $('#ues_semestre')
      idUE.empty().append($html)
    },
    error: function () {
      addCallout('Erreur la requête.', 'danger')
    }
  })
})
