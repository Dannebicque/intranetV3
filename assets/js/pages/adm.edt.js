// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.edt.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import '../../vendor/jqueryui/jquery-ui.min'
import Routing from 'fos-router'

let Cells = []
let Ind = 0

// select
function updateBloc(id) {
  $.ajax({
    url: Routing.generate('administration_edt_get_event', { id }),
    success(data) {
      $('#hdbt').val(data.heureDbtInt)
      $('#hfin').val(data.heureFinInt)
      $(`#jourc${data.jour}`).prop('checked', true)
      $('#typecours').val(`${data.typecours}-${data.groupe}`)
      $('#salle').val(data.salle)
      $('#texte').val(data.texte)
      $('#selectmatiere').val(data.typeIdMatiere)
      $('#selectenseignant').val(data.personnelId)
      $('#idEdtUpdate').val(data.id)
      $('#btnAddEDT').empty().append('Modifier le créneau')
      $('#btnDelete').prop('href', Routing.generate('administration_edt_delete', { id: data.id }))

      $('#blocadd').show()
    },
  })
}

// une fois la selection terminée
function selectfin() {
  let valeur

  const tabdbt = Cells[0].split('_')
  $('#hdbt').val(tabdbt[1])

  const tabfin = Cells[Cells.length - 1].split('_')

  const fin = parseInt(tabfin[1]) + 1
  $('#hfin').val(fin)

  $(`#jourc${tabdbt[2]}`).prop('checked', true)

  const diff = parseInt(tabfin[3]) - parseInt(tabdbt[3])
  if (diff === 0)// donc sur la même colonne
  {
    valeur = `TP-${tabdbt[3]}`
  } else if (diff === 1)// donc sur 2 colonnes)
  {
    valeur = `TD-${tabdbt[3]}`
  } else {
    valeur = 'CM-1'
  }

  $('#typecours').val(valeur)
  $('#salle').val('')
  $('#texte').val('')
  $('#idEdtUpdate').val('')
  $('#btnAddEDT').empty().append('Ajouter le créneau')
  $('#blocadd').show()
}

// au debut de la selection
function debut() {
  Cells = []
  Ind = 0
}

// mémoriser les celulles selectionnées
$('#selectable').selectable({
  filter: 'th,td:not(.edt_cours)',
  start(event, ui) {
    if (!$(event.originalEvent.target).hasClass('edt_cours')) {
      debut()
    }
  },
  stop(event, ui) {
    if ($(event.originalEvent.target).hasClass('edt_cours')) {
      updateBloc($(event.originalEvent.target).data('edt'))
    } else {
      selectfin()
    }
  },
  selected(event, ui) {
    const s = $(this).find('.ui-selected')
    Cells[Ind] = $(ui.selected).attr('id')
    Ind += 1
  },
})

$('#foc').scroll()

// importer semaine
$(document).on('click', '#idimportsemaine', () => {
  const za = $('#zoneaction')
  za.empty()
  za.load(Routing.generate('administration_edt_za_importsemaine'))
  za.fadeIn(1000)
})

// changement d'heure de début
$(document).on('change', '#hdbt', function () {
  const t = parseInt($(this).val()) + 3
  $('#hfin').val(t)
})

// //affiche par prof
$(document).on('change', '#affichepersonnel', function () {
  const tabetu = $('#zone_edt')
  const $sem = $('#semaine2').val()

  tabetu.empty()
  tabetu.load(Routing.generate('administration_edt_ajax_update', {
    filtre: 'prof',
    valeur: $(this).val(),
    semaine: $sem,
  }))
  tabetu.fadeIn(2000)
})

// affiche par prof
$(document).on('change', '#affichesalle', function () {
  const tabetu = $('#zone_edt')
  const $sem = $('#semaine2').val()
  tabetu.empty().hide()
  tabetu.load(Routing.generate('administration_edt_ajax_update', {
    filtre: 'salle',
    valeur: $(this).val(),
    semaine: $sem,
  }))
  tabetu.fadeIn(2000)
})

// //affiche de tous les groupes de toutes les promos
// $(document).on('change', '#affichejour', function () {
//   const tabetu = $('#zone_edt')
//   const $sem = $('#semainereelle').val()
//   tabetu.empty();
//   /*tabetu.load("{{ path('da_kernel_administration_ajaxedt') }}", {
//     filtre: 'jour',
//     valeur: $(this).val(),
//     semainer: $sem
//   });*/
//   tabetu.fadeIn(2000);
//   $('#load-page').hide();
//
// });

// affichage d'une promo sur une semaine précise
$(document).on('change', '#affichesemaine', function () {
  const tabetu = $('#zone_edt')
  const $sem = $('#semaine2').val()
  const $val = $(this).val().split('_')
  tabetu.empty()
  tabetu.load(Routing.generate('administration_edt_ajax_update', {
    filtre: $val[0],
    valeur: $val[1],
    semaine: $val[2],
  }))
  tabetu.fadeIn(2000)
})

// affichage par matière
$(document).on('change', '#affichematiere', function () {
  const tabetu = $('#zone_edt')
  const $sem = $('#semaine2').val()

  tabetu.empty()
  tabetu.load(Routing.generate('administration_edt_ajax_update', {
    filtre: 'module',
    valeur: $(this).val(),
    semaine: $sem,
  }))
  tabetu.fadeIn(2000)
})

/** ************ */
/* EDT REALISE */
/** ************ */

$(document).on('change', '#selectpersonnel', () => {
  const selectMatiere = $('#selectmatiere')
  // selectMatiere.selectpicker('val', '0')
  selectMatiere.val(0)
})

// $(document).on('change', '#edtSelectSemestre', function () {
//   $.ajax(
//     {
//       url: Routing.generate('api_matieres_semestre_personnel', {
//         semestre: $(this).val(),
//         personnel: $('#selectpersonnel').val()
//       }),
//       type: 'POST',
//       dataType: 'json', //Return data type (what we expect).
//       success: function (data) {
//         const selectMatiere = $('#selectmatiere')
//         selectMatiere.selectpicker('destroy')
//         selectMatiere.empty()
//         selectMatiere.append(new Option('Choisissez une matière !', ''))
//         for (let key in data) {
//           let value = data[key]
//           selectMatiere.append(new Option(value.libelle + ' (UE: ' + value.ue + ')', value.id))
//         }
//         selectMatiere.selectpicker()
//       },
//       error: function () {
//
//       }
//     })
// })

$(document).on('click', '#btnafficheRealise', (e) => {
  e.preventDefault()
  const $bloc = $('#blocchrono')
  $bloc.empty()
  $bloc.load(Routing.generate('administration_edt_service_realise_affiche', {
    personnel: $('#selectpersonnel').val(),
    matiere: $('#selectmatiere').val(),
  }))
})
