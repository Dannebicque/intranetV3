// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/public/src/assets/js/script/partials/configuration.js
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 25/11/2019 10:18

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

$(document).on('change', '.changeOptionSelect', function () {
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

$(document).on('change', '.activeAnneeUniversitaire', function (e) {
  e.preventDefault()
  e.stopPropagation()

  $.ajax({
    url: Routing.generate('sa_annee_universitaire_change_active', {annee: $(this).data('id')}),
    method: 'POST',
    data: {
      value: $(this).prop('checked')
    },
    success: function (data) {
      addCallout('Configuration enregistrée', 'success')
    }, error: function (e) {
      addCallout('Erreur lors de l\'enregistrement de la configuration', 'danger')
    }
  })
})
