// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/public/src/assets/js/script/partials/groupe.js
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 25/11/2019 10:18

$(document).on('change', '.typegroupe_defaut', function (e) {
  $.ajax({
    url: Routing.generate('administration_type_groupe_defaut'),
    method: 'POST',
    data: {
      typegroupe: $(this).val()
    },
    success: function () {
      addCallout('Type de groupe par défaut enregistré', 'success')
    }, error: function () {
      addCallout('Erreur lors de l\'enregistrement du type de groupe par défaut', 'danger')
    }
  })
})

$(document).on('click', '.add_groupe', function () {
  const $parent = $(this).data('parent')

  $.ajax({
    url: Routing.generate('administration_groupe_new'),
    method: 'POST',
    data: {
      libelle: $('#groupe_libelle_' + $parent).val(),
      ordre: $('#groupe_ordre_' + $parent).val(),
      code: $('#groupe_code_apogee_' + $parent).val(),
      type: $('#groupe_type_groupe_' + $parent).val(),
      parcours: $('#groupe_parcours_' + $parent).val(),
      parent: $parent
    },
    success: function (data) {
      $('#groupe_bloc_' + data.semestre).empty().load(Routing.generate('administration_groupe_refresh', {parent: data.semestre}))
      addCallout('Groupe ajouté', 'success')
    }, error: function () {
      addCallout('Erreur lors de l\'ajout du groupe', 'danger')
    }
  })
})
