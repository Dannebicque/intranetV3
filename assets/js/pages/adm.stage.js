// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.stage.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 09/02/2020 18:05

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
