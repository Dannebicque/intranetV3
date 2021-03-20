// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/apc.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 20/03/2021 17:50
import '../../vendor/jquery.collection'
import '../../vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min'
import $ from 'jquery'

let semestreSae = false
let semestreRessource = false
let semestre = null
let competenceSae = false
let competenceRessource = false

$(document).on('change', 'input:radio[name="apc_sae[semestre]"]', function (e) {
  semestre = $(this).val()
  semestreSae = true
  updateSaeApprentisagesCritiques()
  updateSaeRessources()
})

$(document).on('change', 'input:checkbox[name="apc_sae[competences][]"]', function (e) {
  competenceSae = $('input:checkbox[name="apc_sae[competences][]"]:checked').length > 0
  updateSaeApprentisagesCritiques()
})

$(document).on('change', 'input:radio[name="apc_ressource[semestre]"]', function (e) {
  semestre = $(this).val()
  semestreRessource = true
  updateRessourcesApprentisagesCritiques()
  updateRessourceSae()
})

$(document).on('change', 'input:checkbox[name="apc_ressource[competences][]"]', function (e) {
  console.log($('input:checkbox[name="apc_ressource[competences][]"]:checked'))
  competenceRessource = $('input:checkbox[name="apc_ressource[competences][]"]:checked').length > 0
  updateRessourcesApprentisagesCritiques()
})

//mise à jour à l'affichage
$(document).ready(function () {
  semestreSae = true//$('input:radio[name="apc_sae[semestre]"]:checked').length() === 1
  semestre = $('input:radio[name="apc_sae[semestre]"]').val()
  competenceSae = $('input:checkbox[name="apc_sae[competences][]"]:checked').length > 0
  updateSaeApprentisagesCritiques()
  updateRessourcesApprentisagesCritiques()
})

function updateSaeRessources () {
  if (semestre === true) {
    $.ajax({
      url: Routing.generate('administration_apc_sae_ajax'),
      type: 'POST',
      dataType: 'json',
      data: {
        semestre: semestre,
        ressource: ressouce
      },
      success: function (data) {
        console.log(data)
        let html = '<div class="row">'
        if (data !== false) {

          for (var ressource in data) {
            html = html + '<div class="col-md-6">' +
              '<div class="form-check">' +
              '<input type="checkbox" id="ac_' + data[ressource].id + '" name="ressources[]" class="form-check-input" value="' + data[ressource].id + '" ' + data[ressource].checked + '>\n' +
              '<label class="form-check-label" for="ac_' + data[ressource].id + '">' + data[ressource].libelle + '</label></div>' +
              '</div>'
          }
          html = html + '</div>'
        }
        $('#ressourcesSae').html(html)
      }
    })
  } else {
    let html = '<div class="alert alert-warning">Indiquer un semestre</div>'
    $('#ressourcesSae').html(html)
  }
}

function updateSaeApprentisagesCritiques () {
  if (competenceSae === true && semestreSae === true) {
    let comps = []

    $.each($('input:checkbox[name="apc_sae[competences][]"]:checked'), function () {
      comps.push($(this).val())
    })

    $.ajax({
      url: Routing.generate('administration_apc_sae_ajax_ac'),
      type: 'POST',
      dataType: 'json',
      data: {
        semestre: semestre,
        competences: comps,
        sae: sae
      },
      success: function (data) {
        console.log(data)
        let html = ''
        if (data !== false) {

          for (var comp in data) {
            html = html + '<p>' + comp + '</p><div class="row">'
            for (let ac in data[comp]) {
              html = html + '<div class="col-md-6">' +
                '<div class="form-check">' +
                '<input type="checkbox" id="ac_' + data[comp][ac].id + '" name="ac[]" class="form-check-input" value="' + data[comp][ac].id + '" '+data[comp][ac].checked+'>\n' +
                '<label class="form-check-label" for="ac_' + data[comp][ac].id + '">' + data[comp][ac].libelle + '</label></div>' +
                '</div>'
            }
            html = html + '</div>'
          }

        } else {
          html = '<div class="alert alert-warning">Indiquer un semestre et au moins une compétence</div>'
        }
        $('#acSae').html(html)
      }
    })
  } else {
    let html = '<div class="alert alert-warning">Indiquer un semestre et au moins une compétence</div>'
    $('#acSae').html(html)
  }
}

function updateRessourceSae () {
  if (semestreSae === true) {


    $.ajax({
      url: Routing.generate('administration_apc_ressources_ajax'),
      type: 'POST',
      dataType: 'json',
      data: {
        semestre: semestre,
        sae: sae
      },
      success: function (data) {
        console.log(data)
        let html = '<div class="row">'
        if (data !== false) {

          for (var ressource in data) {
            html = html + '<div class="col-md-6">' +
              '<div class="form-check">' +
              '<input type="checkbox" id="ac_' + data[ressource].id + '" name="saes[]" class="form-check-input" value="' + data[ressource].id + '" ' + data[ressource].checked + '>\n' +
              '<label class="form-check-label" for="ac_' + data[ressource].id + '">' + data[ressource].libelle + '</label></div>' +
              '</div>'
          }
          html = html + '</div>'
        }
        $('#saeRessource').html(html)
      }
    })
  } else {
    let html = '<div class="alert alert-warning">Indiquer un semestre</div>'
    $('#saeRessource').html(html)
  }
}

function updateRessourcesApprentisagesCritiques () {
  if (competenceRessource === true && semestreRessource === true) {
    let comps = []

    $.each($('input:checkbox[name="apc_ressource[competences][]"]:checked'), function () {
      comps.push($(this).val())
    })

    $.ajax({
      url: Routing.generate('administration_apc_ressources_ajax_ac'),
      type: 'POST',
      dataType: 'json',
      data: {
        semestre: semestre,
        competences: comps,
        ressource: ressource
      },
      success: function (data) {
        console.log(data)
        let html = ''
        if (data !== false) {

          for (var comp in data) {
            html = html + '<p>' + comp + '</p><div class="row">'
            for (let ac in data[comp]) {
              html = html + '<div class="col-md-6">' +
                '<div class="form-check">' +
                '<input type="checkbox" id="ac_' + data[comp][ac].id + '" name="ac[]" class="form-check-input" value="' + data[comp][ac].id + '" ' + data[comp][ac].checked + '>\n' +
                '<label class="form-check-label" for="ac_' + data[comp][ac].id + '">' + data[comp][ac].libelle + '</label></div>' +
                '</div>'
            }
            html = html + '</div>'
          }

        } else {
          html = '<div class="alert alert-warning">Indiquer un semestre et au moins une compétence</div>'
        }
        $('#acRessources').html(html)
      }
    })
  } else {
    let html = '<div class="alert alert-warning">Indiquer un semestre et au moins une compétence</div>'
    $('#acRessources').html(html)
  }
}

$(document).ready(function () {
  let niveauCompetence = $('.selector-niveauCompetence')
  if (niveauCompetence.length > 0) {
    niveauCompetence.collection()
    $(document).on('click', '.apc_competence_apcNiveaux-collection-action', function () {
      let apprentissageCritique = $('.selector-apprentissageCritique')
      if (apprentissageCritique.length > 0) {
        apprentissageCritique.collection()
      }
    })
  }

  let niveauComposanteEssentielles = $('.selector-niveauComposanteEssentielles')
  if (niveauComposanteEssentielles.length > 0) {
    niveauComposanteEssentielles.collection()
  }

  let apcRessourceApprentissageCritique = $('.selector-apcRessourceApprentissageCritique')
  if (apcRessourceApprentissageCritique.length > 0) {
    apcRessourceApprentissageCritique.collection()
  }

  let apprentissageCritique = $('.selector-apprentissageCritique')
  if (apprentissageCritique.length > 0) {
    apprentissageCritique.collection()
  }

  let niveauSituationsProfessionnelles = $('.selector-niveauSituationsProfessionnelles')
  if (niveauSituationsProfessionnelles.length > 0) {
    niveauSituationsProfessionnelles.collection()
  }
})

$(document).on('change', '.checkNiveau', function (e) {
  let etat = 0
  console.log('toto')
  if (($(this).is(':checked'))) {
    etat = 1
  }
  let parcours = $(this).data('parcours')
  $.ajax({
    url: Routing.generate('administration_apc_parcours_niveau_ajax', {
      'parcours': parcours,
      'etat': etat,
      'niveau': $(this).val()
    }),
    success: function (data) {

    }
  })

})

