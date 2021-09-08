// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/apc.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/09/2021 12:08
import '../../vendor/jquery.collection'

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
  competenceRessource = $('input:checkbox[name="apc_ressource[competences][]"]:checked').length > 0
  updateRessourcesApprentisagesCritiques()
})

function updateSaeRessources () {
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
        let html = '<div class="row">'
        if (data !== false) {
          for (var ressource in data) {
            html = html + '<div class="col-md-6">' +
              '<div class="form-check">' +
              '<input type="checkbox" id="ressource_' + data[ressource].id + '" name="ressources[]" class="form-check-input" value="' + data[ressource].id + '" ' + data[ressource].checked + '>\n' +
              '<label class="form-check-label" for="ressource_' + data[ressource].id + '">' + data[ressource].code + ' ' + data[ressource].libelle + '</label></div>' +
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
        let html = ''
        if (data !== false) {

          for (var comp in data) {
            html = html + '<p>' + comp + '</p><div class="row">'
            for (let ac in data[comp]) {
              html = html + '<div class="col-md-6">' +
                '<div class="form-check">' +
                '<input type="checkbox" id="ac_' + data[comp][ac].id + '" name="ac[]" class="form-check-input" value="' + data[comp][ac].id + '" ' + data[comp][ac].checked + '>\n' +
                '<label class="form-check-label" for="ac_' + data[comp][ac].id + '">' + data[comp][ac].code + ' : ' + data[comp][ac].libelle + '</label></div>' +
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
  if (semestreRessource === true) {


    $.ajax({
      url: Routing.generate('administration_apc_sae_ajax'),
      type: 'POST',
      dataType: 'json',
      data: {
        semestre: semestre,
        ressource: ressource
      },
      success: function (data) {
        let html = '<div class="row">'
        if (data !== false) {

          for (var ressource in data) {
            html = html + '<div class="col-md-6">' +
              '<div class="form-check">' +
              '<input type="checkbox" id="sae_' + data[ressource].id + '" name="saes[]" class="form-check-input" value="' + data[ressource].id + '" ' + data[ressource].checked + '>\n' +
              '<label class="form-check-label" for="sae_' + data[ressource].id + '">' + data[ressource].code + ' : ' + data[ressource].libelle + '</label></div>' +
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
        let html = ''
        if (data !== false) {

          for (var comp in data) {
            html = html + '<p>' + comp + '</p><div class="row">'
            for (let ac in data[comp]) {
              html = html + '<div class="col-md-6">' +
                '<div class="form-check">' +
                '<input type="checkbox" id="ac_' + data[comp][ac].id + '" name="ac[]" class="form-check-input" value="' + data[comp][ac].id + '" ' + data[comp][ac].checked + '>\n' +
                '<label class="form-check-label" for="ac_' + data[comp][ac].id + '">' + data[comp][ac].code + ' : ' + data[comp][ac].libelle + '</label></div>' +
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
  semestreSae = true //$('input:radio[name="apc_sae[semestre]"]:checked').length() === 1
  semestreRessource = true //$('input:radio[name="apc_sae[semestre]"]:checked').length() === 1
  if (sae !== null) {
    semestre = $('input:radio[name="apc_sae[semestre]"]:checked').val()
  }
  if (ressource !== null) {
    semestre = $('input:radio[name="apc_ressource[semestre]"]:checked').val()
  }
  console.log(semestre)
  competenceSae = $('input:checkbox[name="apc_sae[competences][]"]:checked').length > 0
  competenceRessource = $('input:checkbox[name="apc_ressource[competences][]"]:checked').length > 0
  updateSaeApprentisagesCritiques()
  updateRessourcesApprentisagesCritiques()
  updateRessourceSae()
  updateSaeRessources()


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

