// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.matieres.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/08/2020 09:15

$('#matiere_semestre').change(function () {
  const semestreSelector = $(this)

  // Request the neighborhoods of the selected city.
  $.ajax({
    url: Routing.generate('api_liste_ue_by_semestre'),
    dataType: 'JSON',
    type: 'POST',
    data: {
      semestreid: semestreSelector.val()
    },
    success: function (ues) {
      const matiereSelector = $('#matiere_ue')

      // Remove current options
      matiereSelector.html('')

      // Empty value ...
      matiereSelector.append('<option value> Choisir une UE dans le semestre ' + semestreSelector.find('option:selected').text() + ' ...</option>')


      $.each(ues, function (key, ue) {
        matiereSelector.append('<option value="' + ue.id + '">' + ue.numeroUe + ' ' + ue.libelle + '</option>')
      })
    },
    error: function (err) {
      alert('An error ocurred while loading data ...')
    }
  })

  $.ajax({
    url: Routing.generate('api_liste_parcour_by_semestre'),
    dataType: 'JSON',
    type: 'POST',
    data: {
      semestreid: semestreSelector.val()
    },
    success: function (parcours) {
      const parcourSelector = $('#matiere_parcours')

      // Remove current options
      parcourSelector.html('')

      // Empty value ...
      parcourSelector.append('<option value> Choisir (optionnel) un parcour pour le semestre ' + semestreSelector.find('option:selected').text() + ' ...</option>')


      $.each(parcours, function (key, parcour) {
        parcourSelector.append('<option value="' + parcour.id + '">' + parcour.libelle + '</option>')
      })
    },
    error: function (err) {
      alert('An error ocurred while loading data ...')
    }
  })

  $.ajax({
    url: Routing.generate('api_matieres_semestre', {semestre: semestreSelector.val()}),
    dataType: 'JSON',
    type: 'GET',
    success: function (matieres) {
      const parentSelector = $('#matiere_matiereParent')

      // Remove current options
      parentSelector.html('')

      // Empty value ...
      parentSelector.append('<option value> Choisir (optionnel) une matière parent pour ' + $('#matiere_libelle').val() + ' ...</option>')


      $.each(matieres, function (key, matiere) {
        parentSelector.append('<option value="' + matiere.id + '">' + matiere.display + '</option>')
      })
    },
    error: function (err) {
      alert('An error ocurred while loading data ...')
    }
  })
})

$(document).on('click', '.change-diplome', function (e) {
  e.preventDefault()
  $('.change-diplome').removeClass('active show')
  $(this).addClass('active show')
  let $diplome = $(this).data('diplome')
  $.ajax({
    url: Routing.generate('administration_matiere_diplome', {diplome: $diplome}),
    dataType: 'HTML',
    type: 'GET',
    success: function (data) {
      $('#content_diplome').slideUp().empty().append(data).slideDown()
      $('.datatable_matieres').dataTable({
        language: langueFr
      })
      $('#export_csv').attr('href', Routing.generate('administration_matiere_export', {
        diplome: $diplome,
        '_format': 'csv'
      }))
      $('#export_xlsx').attr('href', Routing.generate('administration_matiere_export', {
        diplome: $diplome,
        '_format': 'xlsx'
      }))
      $('#export_pdf').attr('href', Routing.generate('administration_matiere_export', {
        diplome: $diplome,
        '_format': 'pdf'
      }))
    }
  })

})
