/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/trombinoscope.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

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
