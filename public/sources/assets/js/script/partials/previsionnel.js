$(document).on('change', '#previSemestre', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_semestre.fr', {semestre: $(this).val()}));
});

$(document).on('change', '#previMatiere', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_matiere.fr', {matiere: $(this).val()}));
});

$(document).on('change', '#previPersonnel', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_personnel.fr', {personnel: $(this).val()}));
});

$(document).on('click', '.previsionnel_add_change', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $('.previsionnel_add_change').removeClass('active show');
  $(this).addClass('active show');
  $('#mainContent').empty().load($(this).attr('href'));
});