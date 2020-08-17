// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/applications.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 11:18
import {addCallout} from '../util'
import './messagerie'

$(document).on('click', '.changeapplication', function (e) {
  e.preventDefault()
  e.stopPropagation()

  $('.changeapplication').removeClass('active show')
  $(this).addClass('active show')
  $('#mainContent').empty().load($(this).attr('href'))
});

$(document).on('change', '#selectsemestre', function () {
  //matieres
  $('#listegroupe').empty();
  const selectMatiere = $('#selectmatiere')
  const selectGroupes = $('#selectgroupes')
  $.ajax(
    {
      url: Routing.generate('api_matieres_semestre', {semestre: $(this).val()}),
      dataType: "json", //Return data type (what we expect).
      success: function (data) {
        selectMatiere.empty();
        selectMatiere.append($("<option></option>")
          .attr("value", "")
          .text("Choisir une matière"));
        jQuery.each(data, function (index, matiere) {
          selectMatiere.append($("<option></option>")
            .attr("value", matiere.id)
            .text(matiere.display));
        });
        selectMatiere.attr('data-provide', 'selectpicker')
        selectMatiere.attr('data-live-search', 'true')
      },
      error: function () {
        addCallout('Erreur lors de la tentative d\'affichage des matières du semestres. Veuillez contacter le responsable de l\'intranet si le problème persiste !', 'danger')
      }
    });
  //groupes
  $.ajax(
    {
      url: Routing.generate('api_type_groupe_semestre', {semestre: $(this).val()}),

      dataType: "json", //Return data type (what we expect).
      success: function (data) {
        selectGroupes.empty();
        selectGroupes.append($("<option></option>")
          .attr("value", "")
          .text("Choisir un type de groupe"));
        jQuery.each(data, function (index, typeGroupe) {

          selectGroupes.append($("<option></option>")
            .attr("value", typeGroupe.id)
            .text(typeGroupe.libelle));
        });
      },
      error: function () {
        addCallout('Erreur lors de la tentative d\'affichage des groupes du semestres. Veuillez contacter le responsable de l\'intranet si le problème persiste !', 'danger')
      }
    });
});

$(document).on('change', '#selectgroupes', function () {

  const $lgr = $('#listegroupe')
  //matieres
  $.ajax(
    {
      url: Routing.generate('api_groupe_type_groupe', {typeGroupe: $(this).val()}),
      dataType: "json", //Return data type (what we expect).
      success: function (data) {
        $lgr.empty();
        let $html = ''
        jQuery.each(data, function (index, groupe) {
          $html += '<input type="checkbox" checked name="detail_groupes[]" value="' + groupe.id + '"> ' + groupe.libelle + ' | ';
        });
        $lgr.html($html);
      },
      error: function () {
        addCallout('Erreur lors de la tentative d\'affichage des groupes du semestres. Veuillez contacter le responsable de l\'intranet si le problème persiste !', 'danger')
      }
    });
});

$(document).on('click','#add_rattrapage', function(){
  $('#bloc_add_rattrapage').toggle();
})

$(document).on('click','#add_carnet', function(){
  $('#bloc_add_carnet').toggle();
})
