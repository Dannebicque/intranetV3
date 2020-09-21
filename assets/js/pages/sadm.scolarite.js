// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/sadm.scolarite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/09/2020 15:49
import {addCallout} from '../util'

$(document).on('change', '#chgt_etudiant_departement', function () {
  $.ajax({
    url: Routing.generate('user_change_departement', {etudiant: $(this).data('etudiant'), departement: $(this).val()}),
    method: 'POST',
    success: function (e) {
      $('#liste_groupes').empty().append('<tr><td colspan="3">Aucun groupe</td></tr>')
      addCallout('Mofification enregistrée !', 'success')
    },
    error: function (e) {
      addCallout('Erreur lors de la sauvegarde de la modification !', 'danger')
    }

  })
})

$(document).on('change', '#chgt_etudiant_fin', function () {
  $.ajax({
    url: Routing.generate('user_change_annee_sortie', {etudiant: $(this).data('etudiant'), annee: $(this).val()}),
    method: 'POST',
    success: function (e) {
      addCallout('Mofification enregistrée !', 'success')
    },
    error: function (e) {
      addCallout('Erreur lors de la sauvegarde de la modification !', 'danger')
    }

  })
})


$(document).on('keyup', '#etudiant', function () {
  const $val = $(this).val()
  if ($val.length > 2) {
    $('#resultat').empty().load(Routing.generate('sa_etudiant_recherche', {needle: $val}))
  }
})

$(document).on('change', '#scolarite_semestre', function () {
  $.ajax(
    {
      url: Routing.generate('administration_scolarite_ues_semestre', {semestre: $(this).val()}),
      type: 'POST',
      success: function (data) {
        var $html = '<div class="row" id="blocUEs"><div class="col-sm-1">&nbsp;</div><div class="col-sm-11">'
        for (var key in data) {
          var value = data[key]
          $html = $html + '<div class="form-group"><label for="ue_' + key + '" class="required">UE ' + value + '</label><input type="text" id="ue_' + key + '" name="ue_' + key + '" required="required" class="form-control" value="0"></div>'
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

