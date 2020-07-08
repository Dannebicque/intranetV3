// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.notes.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/11/2019 19:40

$(document).on('click', '.optAfficher', function () {
  const evaluation = $(this).data('id')
  const $child = $(this).children('i')
  const $a = $(this)
  $.ajax({
    url: Routing.generate('administration_evaluation_visibilite', {uuid: evaluation}),
    success: function () {
      if ($child.hasClass('fa-eye')) {
        $a.addClass('btn-danger')
        $a.removeClass('btn-info').removeClass('btn-outline')

        $child.removeClass('fa-eye')
        $child.addClass('fa-eye-slash')
        $a.attr('title', 'Evaluation masquée. Rendre visible l\'évaluation')
      } else {
        $a.removeClass('btn-danger')
        $a.addClass('btn-info').addClass('btn-outline')
        $child.removeClass('fa-eye-slash')
        $child.addClass('fa-eye')
        $a.attr('title', 'Evaluation visible. Masquer l\'évaluation')
      }
      addCallout('Visibilité de l\'évaluation modifiée !', 'success')
    },
    error: function () {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('click', '.optVerrouiller', function () {
  const evaluation = $(this).data('id')
  const $child = $(this).children('i')
  const $a = $(this)
  $.ajax({
    url: Routing.generate('administration_evaluation_modifiable', {uuid: evaluation}),
    success: function () {
      if ($(this).children('i').hasClass('fa-pencil')) {
        $a.addClass('btn-danger')
        $a.removeClass('btn-warning').removeClass('btn-outline')
        $child.children('i').removeClass('fa-pencil')
        $child.children('i').addClass('fa-lock')
        $a.attr('data-original-title', 'Modification interdite. Autoriser la modificaiton')
      } else {
        $a.removeClass('btn-danger')
        $a.addClass('btn-warning').addClass('btn-outline')
        $child.children('i').removeClass('fa-lock')
        $child.addClass('fa-pencil')
        $a.attr('data-original-title', 'Modification autorisée. Interdire la modification')
      }
      addCallout('Vérouillage de l\'évaluation modifiée !', 'success')
    },
    error: function () {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})
