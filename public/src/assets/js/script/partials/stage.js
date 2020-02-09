/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/public/src/assets/js/script/partials/stage.js
 * @author     David Annebicque
 * @project intranetv3
 * @date 30/07/2019 08:40
 * @lastUpdate 30/07/2019 08:39
 */

$(document).on('change', '.changetuteur', function () {
  $.ajax({
    url: Routing.generate('administration_stage_etudiant_change_tuteur', {
      stageEtudiant: $(this).data('stage'),
      tuteur: $(this).val()
    }),
    success: function () {
      addCallout('Tuteur universitaire modifié !', 'success')
    }
  })
})

$(document).on('click', '.enregistreModeleMail', function () {
  const etat = $(this).data('type')
  console.log(etat)
  console.log(ed2.getContents())
  $.ajax({
    url: Routing.generate('administration_stage_periode_courrier_sauvegarde_modele', {
      uuid: $(this).data('periode'),
      mail: etat
    }),
    data: {
      message: ed2.root.innerHTML,
      sujet: $('#sujet_' + etat).val()
    },
    success: function () {
      addCallout('Modèle enregistré !', 'success')
    }
  })
})
