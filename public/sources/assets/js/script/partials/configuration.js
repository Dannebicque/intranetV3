$(document).on('change', '.changeOption', function (e) {
  e.preventDefault();
  e.stopPropagation();

  console.log($(this));
  console.log();

  $.ajax({
    url: Routing.generate('administration_configuration_change_option.fr'),
    method: 'POST',
    data: {
      type: $(this).data('type'),
      value: $(this).prop('checked'),
      name: $(this).attr('name'),
      id: $(this).data('id')
    }
  })

});

$(document).on('change', '.changeOptionSelect', function (e) {
  e.preventDefault();
  e.stopPropagation();

  console.log($(this));
  console.log();

  $.ajax({
    url: Routing.generate('administration_configuration_change_option.fr'),
    method: 'POST',
    data: {
      type: $(this).data('type'),
      value: $(this).val(),
      name: $(this).attr('name'),
      id: $(this).data('id')
    }
  })

});