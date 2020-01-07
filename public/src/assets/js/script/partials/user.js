/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/user.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('change', '.departementParDefaut', function(e){
  $.ajax({
    url: Routing.generate('user_change_departement_defaut', {departement: $(this).val()}),
    method: 'POST',
    success: function (e) {
      addCallout('Mofification enregistrée !', 'success')
    },
    error: function (e) {
      addCallout('Erreur lors de la sauvegarde de la modification !', 'danger')
    }
  })
});

$(document).on('change', '#chgt_etudiant_semestre', function () {
  $.ajax({
    url: Routing.generate('user_change_semestre', {etudiant: $(this).data('etudiant'), semestre: $(this).val()}),
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
