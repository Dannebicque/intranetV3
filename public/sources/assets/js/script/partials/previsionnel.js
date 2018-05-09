$(document).on('change', '#previSemestre', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_semestre', {semestre: $(this).val()}));
});

$(document).on('change', '#previMatiere', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_matiere', {matiere: $(this).val()}));
});

$(document).on('change', '#previPersonnel', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_personnel', {personnel: $(this).val()}));
});