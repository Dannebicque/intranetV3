// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.groupe.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/09/2021 09:01

import {addCallout} from '../util'

$(document).on('click', '.change-semestre', function (e) {
  e.preventDefault()
  $('.change-semestre').removeClass('active show')
  $(this).addClass('active show')
  let semestre = $(this).data('semestre')

  $('#liste_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {semestre: semestre}, function () {
      $('#export_csv').attr('href', Routing.generate('administration_groupe_export', {
        semestre: semestre,
        '_format': 'csv'
      }))
      $('#export_xlsx').attr('href', Routing.generate('administration_groupe_export', {
        semestre: semestre,
        '_format': 'xlsx'
      }))
      $('#export_pdf').attr('href', Routing.generate('administration_groupe_export', {
        semestre: semestre,
        '_format': 'pdf'
      }))
    })
  )
  $('#type_groupes_semestre').empty().load(Routing.generate('administration_type_groupe_liste_semestre', {semestre: semestre}))
})

$(document).on('change', '.change-parent', function () {
  const semestre = $(this).data('semestre')
  $.ajax({
    url: Routing.generate('administration_groupe_change_parent'),
    data: {
      groupe: $(this).data('groupe'),
      parent: $(this).val()
    },
    method: 'POST',
    success: function () {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {semestre: semestre}))
      addCallout('Mise à jour du parent', 'success')
    }
  })
})

$(document).on('change', '.change-typegroupe', function () {
  const semestre = $(this).data('semestre')
  $.ajax({
    url: Routing.generate('administration_groupe_change_typegroupe'),
    data: {
      groupe: $(this).data('groupe'),
      typegroupe: $(this).val()
    },
    method: 'POST',
    success: function () {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {semestre: semestre}))
      addCallout('Mise à jour du type de groupe', 'success')
    }
  })
})

$(document).on('change', '.change-parcours', function () {
  const semestre = $(this).data('semestre')
  $.ajax({
    url: Routing.generate('administration_groupe_change_parcours'),
    data: {
      groupe: $(this).data('groupe'),
      parcours: $(this).val()
    },
    method: 'POST',
    success: function () {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {semestre: semestre}))
      addCallout('Mise à jour du parcours associé au groupe', 'success')
    }
  })
})

$(document).on('change', '.change-type_typegroupe', function () {
  $.ajax({
    url: Routing.generate('administration_typegroupe_change_type', {typeGroupe: $(this).data('typegroupe')}),
    data: {
      type: $(this).val()
    },
    method: 'POST',
    success: function () {
      addCallout('Mise à jour du type de type de groupe', 'success')
    }
  })
})

$(document).on('click', '.duplicate-groupe', function (e) {
  e.preventDefault()
  const semestre = $(this).data('semestre')
  $.ajax({
    url: Routing.generate('administration_groupe_duplicate', {groupe: $(this).data('groupe')}),
    method: 'GET',
    success: function () {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {semestre: semestre}))
      addCallout('Groupe dupliqué', 'success')
    }
  })
})

$(document).on('click', '.duplicate-type_groupe', function (e) {
  e.preventDefault()
  const semestre = $(this).data('semestre')
  $.ajax({
    url: Routing.generate('administration_type_groupe_duplicate', {typegroupe: $(this).data('typegroupe')}),
    method: 'GET',
    success: function () {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {semestre: semestre}))
      $('#type_groupes_semestre').empty().load(Routing.generate('administration_type_groupe_liste_semestre', {semestre: semestre}))
      addCallout('Type de groupe dupliqué', 'success')
    }
  })
})

$(document).on('click', '#addGroupe', function (e) {
  e.preventDefault()

  if (document.getElementById('groupe_libelle').value.trim() !== '' &&
    document.getElementById('groupe_ordre').value.trim() !== '') {

    const semestre = $(this).data('semestre')
    let data = new FormData($('#form_groupe')[0])
    console.log(data)
    $.ajax({
      url: Routing.generate('administration_groupe_new', {semestre: semestre}),
      data: data,
      processData: false,
      contentType: false,
      method: 'POST',
      success: function () {
        $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {semestre: semestre}))
        addCallout('Mise à jour du parcours associé au groupe', 'success')
      }
    })
  } else {
    addCallout('Veuillez remplir tous les champs obligatoires', 'danger')
    if (document.getElementById('groupe_libelle').value.trim() === '') {
      document.getElementById('groupe_libelle').classList.add('is-invalid')
      document.getElementById('error_groupe_libelle').display = 'block'
    } else {
      document.getElementById('groupe_libelle').classList.remove('is-invalid')
      document.getElementById('error_groupe_libelle').display = 'none'
    }
    if (document.getElementById('groupe_ordre').value.trim() === '') {
      document.getElementById('groupe_ordre').classList.add('is-invalid')
      document.getElementById('error_groupe_ordre').display = 'block'

    } else {
      document.getElementById('groupe_ordre').classList.remove('is-invalid')
      document.getElementById('error_groupe_ordre').display = 'none'

    }
  }

})

$(document).on('click', '#addTypeGroupe', function (e) {
  e.preventDefault()
  if (document.getElementById('typegroupe_libelle').value.trim() !== '' &&
    document.getElementById('typegroupe_type').value.trim() !== '') {
    const semestre = $(this).data('semestre')
    $.ajax({
      url: Routing.generate('administration_type_groupe_new', {semestre: semestre}),
      data: {
        libelle: $('#typegroupe_libelle').val(),
        type: $('#typegroupe_type').val(),
        defaut: $('#typegroupe_defaut').prop('checked')
      },
      method: 'POST',
      success: function () {
        $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {semestre: semestre}))
        $('#type_groupes_semestre').empty().load(Routing.generate('administration_type_groupe_liste_semestre', {semestre: semestre}))
        addCallout('Ajout d\'un type de groupe', 'success')
      }
    })
  } else {
    console.log(document.getElementById('typegroupe_type').value.trim())
    addCallout('Veuillez remplir tous les champs obligatoires', 'danger')
    if (document.getElementById('typegroupe_libelle').value.trim() === '') {
      document.getElementById('typegroupe_libelle').classList.add('is-invalid')
      document.getElementById('error_typegroupe_libelle').display = 'block'
    } else {
      document.getElementById('typegroupe_libelle').classList.remove('is-invalid')
      document.getElementById('error_typegroupe_libelle').display = 'none'
    }
    if (document.getElementById('typegroupe_type').value.trim() === '') {
      document.getElementById('typegroupe_type').classList.add('is-invalid')
      document.getElementById('error_typegroupe_type').display = 'block'

    } else {
      document.getElementById('typegroupe_type').classList.remove('is-invalid')
      document.getElementById('error_typegroupe_type').display = 'none'
    }
  }
})

$(document).on('change', '.changeDefaut', function (e) {
  const semestre = $(this).data('semestre')
  e.preventDefault()
  e.stopPropagation()

  $.ajax({
    url: Routing.generate('administration_type_groupe_defaut', {
      semestre: semestre,
      typegroupe: $(this).data('type-groupe')
    }),
    method: 'POST',
    data: {
      defaut: $(this).prop('checked')
    },
    success: function () {
      $('#type_groupes_semestre').empty().load(Routing.generate('administration_type_groupe_liste_semestre', {semestre: semestre}))
      addCallout('Type de groupe par défaut enregistrée', 'success')
    }, error: function () {
      addCallout('Erreur lors de l\'enregistrement', 'danger')
    }
  })

})

