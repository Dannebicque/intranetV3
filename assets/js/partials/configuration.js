$(document).on('change', '.changeOption', function (e) {
  e.preventDefault();
  e.stopPropagation();

  $.ajax({
    url: Routing.generate('administration_configuration_change_option'),
    method: 'POST',
    data: {
      type: $(this).data('type'),
      value: $(this).prop('checked'),
      name: $(this).attr('name'),
      id: $(this).data('id')
    },
    success: function(data) {
      addCallout('Configuration enregistrée', 'success')
    }, error: function(e){
      addCallout('Erreur lors de l\'enregistrement de la configuration', 'danger')
    }
  })

});

$(document).on('change', '.changeOptionSelect', function (e) {
  $.ajax({
    url: Routing.generate('administration_configuration_change_option'),
    method: 'POST',
    data: {
      type: $(this).data('type'),
      value: $(this).val(),
      name: $(this).attr('name'),
      id: $(this).data('id')
    },
    success: function(data) {
      addCallout('Configuration enregistrée', 'success')
    }, error: function(e){
      addCallout('Erreur lors de l\'enregistrement de la configuration', 'danger')
    }
  })

});