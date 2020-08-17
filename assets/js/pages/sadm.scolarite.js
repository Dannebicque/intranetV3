// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/sadm.scolarite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 13:04
import {addCallout} from '../util'

$(document).on('keyup', '#etudiant', function () {
  const $val = $(this).val()
  if ($val.length > 2) {
    $('#resultat').empty().load(Routing.generate('sa_scolarite_recherche', {needle: $val}))
  }
})

$(document).on('change', '#scolarite_semestre', function () {
  $.ajax(
    {
      url: Routing.generate('administration_scolarite_ues_semestre', {semestre: $(this).val()}),
      type: 'POST',
      success: function (data) {
        var $html = '<div class="row" id="blocUEs"><div class="col-sm-1">&nbsp;</div><div class="col-sm-11">';
        for (var key in data) {
          var value = data[key];
          $html = $html + '<div class="form-group"><label for="ue_'+key+'" class="required">UE '+value+'</label><input type="text" id="ue_'+key+'" name="ue_'+key+'" required="required" class="form-control" value="0"></div>';
        }
        $html = $html + '</div></div>'
        var idUE = $('#scolarite_semestre')
        if (document.getElementById("blocUEs")) {
          $('#blocUEs').remove()
        }
        idUE.after($html)
      },
      error: function () {
        addCallout('Erreur la requête.', 'danger')
      }
    });
});
