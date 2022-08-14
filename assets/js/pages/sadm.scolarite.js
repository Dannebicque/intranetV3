// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/sadm.scolarite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import { addCallout } from '../util'
import Routing from 'fos-router'

$(document).on('change', '.chgt_etudiant_departement', function () {
  $.ajax({
    url: Routing.generate('user_change_departement', { etudiant: $(this).data('etudiant'), departement: $(this).val() }),
    method: 'POST',
    success(e) {
      addCallout('Mofification enregistrée !', 'success')
    },
    error(e) {
      addCallout('Erreur lors de la sauvegarde de la modification !', 'danger')
    },

  })
})

$(document).on('change', '.chgt_etudiant_semestre', function () {
  $.ajax({
    url: Routing.generate('user_change_semestre', { etudiant: $(this).data('etudiant'), semestre: $(this).val() }),
    method: 'POST',
    success(e) {
      addCallout('Mofification enregistrée !', 'success')
    },
    error(e) {
      addCallout('Erreur lors de la sauvegarde de la modification !', 'danger')
    },

  })
})

$(document).on('change', '.chgt_etudiant_fin', function () {
  $.ajax({
    url: Routing.generate('user_change_annee_sortie', { etudiant: $(this).data('etudiant'), annee: $(this).val() }),
    method: 'POST',
    success(e) {
      addCallout('Mofification enregistrée !', 'success')
    },
    error(e) {
      addCallout('Erreur lors de la sauvegarde de la modification !', 'danger')
    },

  })
})

$(document).on('keyup', '#etudiant', function () {
  const $val = $(this).val()
  if ($val.length > 2) {
    $('#resultat').empty().load(Routing.generate('sa_etudiant_recherche', { needle: $val }))
  }
})

$(document).on('change', '#scolarite_semestre', function () {
  $.ajax(
    {
      url: Routing.generate('administration_scolarite_ues_semestre', { semestre: $(this).val() }),
      type: 'POST',
      success(data) {
        let $html = '<div class="row" id="blocUEs"><div class="col-sm-1">&nbsp;</div><div class="col-sm-11">'
        for (const key in data) {
          const value = data[key]
          $html = `${$html}<div class="form-group"><label for="ue_${key}" class="required">UE ${value}</label><input type="text" id="ue_${key}" name="ue_${key}" required="required" class="form-control" value="0"></div>`
        }
        $html += '</div></div>'
        const idUE = $('#scolarite_semestre')
        if (document.getElementById('blocUEs')) {
          $('#blocUEs').remove()
        }
        idUE.after($html)
      },
      error() {
        addCallout('Erreur la requête.', 'danger')
      },
    },
  );
});
