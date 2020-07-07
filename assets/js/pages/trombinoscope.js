// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/trombinoscope.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/01/2020 18:15

$(document).on('click', '.semestretrombi', function(e) {
  e.preventDefault();


  $('.semestretrombi').removeClass('active show');
  $('.enseignanttrombi').removeClass('active show');
  $(this).addClass('active show');
  $('#trombi').slideUp().empty().load(Routing.generate('trombinoscope_etudiant_semestre', {semestre: $(this).data('sem')})).slideDown();
});

$(document).on('click', '.changeTypeGroupe', function (e) {
  e.preventDefault();

  $('#trombi').slideUp().empty().load(Routing.generate('trombinoscope_etudiant_semestre', {
    semestre: $(this).data('semestre'),
    typegroupe: $(this).data('typegroupe')
  })).slideDown();
});

$(document).on('click', '.enseignanttrombi', function(e) {
  e.preventDefault();
  $('.semestretrombi').removeClass('active show');
  $('.enseignanttrombi').removeClass('active show');
  $(this).addClass('active show');
  $('#trombi').slideUp().empty().load(Routing.generate('trombinoscope_personnel', {type: $(this).data('type')})).slideDown();
});
