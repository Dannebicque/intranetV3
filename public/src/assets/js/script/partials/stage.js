/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/public/src/assets/js/script/partials/stage.js
 * @author     David Annebicque
 * @project intranetv3
 * @date 30/07/2019 08:40
 * @lastUpdate 30/07/2019 08:39
 */

$(document).on('change', '#tuteurUniversitaireStage', function () {
  $.ajax({
    url: Routing.generate('administration_stage_etudiant_change_tuteur', {stageEtudiant: $(this).data('stage'), tuteur: $(this).val()}),
    success: function () {
      addCallout('Tuteur universitaire modifié !', 'success')
    }
  })
})

/*let ed2, ed3, ed4, ed5, ed6, ed7, ed8, ed9;

if (typeof $('.editCourrier') != 'undefined') {

  const champs = ['[CiviliteEtudiant]','[NomEtudiant]', '[PrenomEtudiant]', '[Entreprise]','[Tuteur]'];
  //let ed1 = loadQuill('#editCourrier', champs)
  ed2 = loadQuill('ETAT_STAGE_AUTORISE')
  ed3 = loadQuill('ETAT_STAGE_DEPOSE')
  ed4 = loadQuill('ETAT_STAGE_VALIDE')
  ed5 = loadQuill('ETAT_STAGE_REFUS')
  ed6 = loadQuill('ETAT_STAGE_INCOMPLET')
  ed7 = loadQuill('ETAT_STAGE_IMPRIME')
  ed8 = loadQuill('ETAT_STAGE_CONVENTION_ENVOYEE')
  ed9 = loadQuill('ETAT_STAGE_CONVENTION_RECUE')
}*/

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
