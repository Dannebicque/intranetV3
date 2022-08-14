// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/scolarite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import { addCallout } from '../util'
import Routing from 'fos-router'

$(document).on('change', '#scolarite_semestre', function () {
  $.ajax({
    url: Routing.generate('administration_scolarite_ues_semestre', { semestre: $(this).val() }),
    type: 'POST',
    success(data) {
      let $html = '<div class="row">'
      for (const key in data) {
        const value = data[key]
        $html += '<div class="col-sm-12 col-md-4">'
        $html = `${$html}<div class="form-group"><label for="ue_${key}" class="required">UE ${value}</label><input type="text" id="ue_${key}" name="ue_${key}" required="required" class="form-control" value="0"></div>`
        $html += '</div>'
      }
      $html += '</div>'
      const idUE = $('#ues_semestre')
      idUE.empty().append($html)
    },
    error() {
      addCallout('Erreur la requête.', 'danger')
    },
  })
})

$(document).on('change', '#scolarite_semestre', function () {
  $.ajax({
    url: Routing.generate('administration_scolarite_ues_semestre', { semestre: $(this).val() }),
    type: 'POST',
    success(data) {
      let $html = '<div class="row">'
      for (const key in data) {
        const value = data[key]
        $html += '<div class="col-sm-12 col-md-4">'
        $html = `${$html}<div class="form-group"><label for="ue_${key}" class="required">UE ${value}</label><input type="text" id="ue_${key}" name="ue_${key}" required="required" class="form-control" value="0"></div>`
        $html += '</div>'
      }
      $html += '</div>'
      const idUE = $('#ues_semestre')
      idUE.empty().append($html)
    },
    error() {
      addCallout('Erreur la requête.', 'danger')
    },
  })
})
