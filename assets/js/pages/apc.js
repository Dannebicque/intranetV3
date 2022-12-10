// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/apc.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 18/11/2022 08:54
import $ from 'jquery'
import '../../vendor/jquery.collection'
import Routing from 'fos-router'

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

$(document).on('change', 'input:checkbox[name="apc_sae[competences][]"]', (e) => {
  competenceSae = $('input:checkbox[name="apc_sae[competences][]"]:checked').length > 0
  updateSaeApprentisagesCritiques()
})

// $(document).on('change', 'input:radio[name="apc_ressource[semestre]"]', function (e) {
//   semestre = $(this).val()
//   semestreRessource = true
//   updateRessourcesApprentisagesCritiques()
//   updateRessourceSae()
// })

// $(document).on('change', 'input:checkbox[name="apc_ressource[competences][]"]', (e) => {
//   competenceRessource = $('input:checkbox[name="apc_ressource[competences][]"]:checked').length > 0
//   updateRessourcesApprentisagesCritiques()
// })

function updateSaeRessources() {
  if (semestreSae === true) {
    $.ajax({
      url: Routing.generate('administration_apc_ressources_ajax'),
      type: 'POST',
      dataType: 'json',
      data: {
        semestre,
        sae,
      },
      success(data) {
        let html = '<div class="row">'
        if (data !== false) {
          for (const ressource in data) {
            html = `${html}<div class="col-md-6">`
              + '<div class="form-check">'
              + `<input type="checkbox" id="ressource_${data[ressource].id}" name="ressources[]" class="form-check-input" value="${data[ressource].id}" ${data[ressource].checked}>\n`
              + `<label class="form-check-label" for="ressource_${data[ressource].id}">${data[ressource].code} ${data[ressource].libelle}</label></div>`
              + '</div>'
          }
          html += '</div>'
        }
        $('#ressourcesSae').html(html)
      },
    })
  } else {
    const html = '<div class="alert alert-warning">Indiquer un semestre</div>'
    $('#ressourcesSae').html(html)
  }
}

function updateSaeApprentisagesCritiques() {
  if (competenceSae === true && semestreSae === true) {
    const comps = []

    $.each($('input:checkbox[name="apc_sae[competences][]"]:checked'), function () {
      comps.push($(this).val())
    })

    $.ajax({
      url: Routing.generate('administration_apc_sae_ajax_ac'),
      type: 'POST',
      dataType: 'json',
      data: {
        semestre,
        competences: comps,
        sae,
      },
      success(data) {
        let html = ''
        if (data !== false) {
          for (const comp in data) {
            html = `${html}<p>${comp}</p><div class="row">`
            for (const ac in data[comp]) {
              html = `${html}<div class="col-md-6">`
                + '<div class="form-check">'
                + `<input type="checkbox" id="ac_${data[comp][ac].id}" name="ac[]" class="form-check-input" value="${data[comp][ac].id}" ${data[comp][ac].checked}>\n`
                + `<label class="form-check-label" for="ac_${data[comp][ac].id}">${data[comp][ac].code} : ${data[comp][ac].libelle}</label></div>`
                + '</div>'
            }
            html += '</div>'
          }
        } else {
          html = '<div class="alert alert-warning">Indiquer un semestre et au moins une compétence</div>'
        }
        $('#acSae').html(html)
      },
    })
  } else {
    const html = '<div class="alert alert-warning">Indiquer un semestre et au moins une compétence</div>'
    $('#acSae').html(html)
  }
}

// function updateRessourceSae() {
//   if (semestreRessource === true) {
//     $.ajax({
//       url: Routing.generate('administration_apc_sae_ajax'),
//       type: 'POST',
//       dataType: 'json',
//       data: {
//         semestre,
//         ressource,
//       },
//       success(data) {
//         let html = '<div class="row">'
//         if (data !== false) {
//           for (const ressource in data) {
//             html = `${html}<div class="col-md-6">`
//               + '<div class="form-check">'
//               + `<input type="checkbox" id="sae_${data[ressource].id}" name="saes[]" class="form-check-input" value="${data[ressource].id}" ${data[ressource].checked}>\n`
//               + `<label class="form-check-label" for="sae_${data[ressource].id}">${data[ressource].code} : ${data[ressource].libelle}</label></div>`
//               + '</div>'
//           }
//           html += '</div>'
//         }
//         $('#saeRessource').html(html)
//       },
//     })
//   } else {
//     const html = '<div class="alert alert-warning">Indiquer un semestre</div>'
//     $('#saeRessource').html(html)
//   }
// }

// function updateRessourcesApprentisagesCritiques() {
//   if (competenceRessource === true && semestreRessource === true) {
//     const comps = []
//     $.each($('input:checkbox[name="apc_ressource[competences][]"]:checked'), function () {
//       comps.push($(this).val())
//     })
//
//     $.ajax({
//       url: Routing.generate('administration_apc_ressources_ajax_ac'),
//       type: 'POST',
//       dataType: 'json',
//       data: {
//         semestre,
//         competences: comps,
//         ressource,
//       },
//       success(data) {
//         let html = ''
//         if (data !== false) {
//           for (const comp in data) {
//             html = `${html}<p>${comp}</p><div class="row">`
//             for (const ac in data[comp]) {
//               html = `${html}<div class="col-md-6">`
//                 + '<div class="form-check">'
//                 + `<input type="checkbox" id="ac_${data[comp][ac].id}" name="ac[]" class="form-check-input" value="${data[comp][ac].id}" ${data[comp][ac].checked}>\n`
//                 + `<label class="form-check-label" for="ac_${data[comp][ac].id}">${data[comp][ac].code} : ${data[comp][ac].libelle}</label></div>`
//                 + '</div>'
//             }
//             html += '</div>'
//           }
//          } else {
//           html = '<div class="alert alert-warning">Indiquer un semestre et au moins une compétence</div>'
//         }
//         $('#acRessources').html(html)
//       },
//     })
//   } else {
//     const html = '<div class="alert alert-warning">Indiquer un semestre et au moins une compétence</div>'
//     $('#acRessources').html(html)
//   }
// }

$(document).ready(() => {
  semestreSae = true // $('input:radio[name="apc_sae[semestre]"]:checked').length() === 1
  semestreRessource = true // $('input:radio[name="apc_sae[semestre]"]:checked').length() === 1
  if (sae !== null) {
    semestre = $('input:radio[name="apc_sae[semestre]"]:checked').val()
  }
  if (ressource !== null) {
    semestre = $('input:radio[name="apc_ressource[semestre]"]:checked').val()
  }
  competenceSae = $('input:checkbox[name="apc_sae[competences][]"]:checked').length > 0
  competenceRessource = $('input:checkbox[name="apc_ressource[competences][]"]:checked').length > 0
  updateSaeApprentisagesCritiques()
  updateRessourcesApprentisagesCritiques()
  updateRessourceSae()
  updateSaeRessources()

  const niveauCompetence = $('.selector-niveauCompetence')
  if (niveauCompetence.length > 0) {
    niveauCompetence.collection()
    $(document).on('click', '.apc_competence_apcNiveaux-collection-action', () => {
      const apprentissageCritique = $('.selector-apprentissageCritique')
      if (apprentissageCritique.length > 0) {
        apprentissageCritique.collection()
      }
    })
  }

  const niveauComposanteEssentielles = $('.selector-niveauComposanteEssentielles')
  if (niveauComposanteEssentielles.length > 0) {
    niveauComposanteEssentielles.collection()
  }

  const apcRessourceApprentissageCritique = $('.selector-apcRessourceApprentissageCritique')
  if (apcRessourceApprentissageCritique.length > 0) {
    apcRessourceApprentissageCritique.collection()
  }

  const apprentissageCritique = $('.selector-apprentissageCritique')
  if (apprentissageCritique.length > 0) {
    apprentissageCritique.collection()
  }

  const niveauSituationsProfessionnelles = $('.selector-niveauSituationsProfessionnelles')
  if (niveauSituationsProfessionnelles.length > 0) {
    niveauSituationsProfessionnelles.collection()
  }
})

$(document).on('change', '.checkNiveau', function (e) {
  let etat = 0
  if (($(this).is(':checked'))) {
    etat = 1
  }
  const parcours = $(this).data('parcours')
  $.ajax({
    url: Routing.generate('administration_apc_parcours_niveau_ajax', {
      parcours,
      etat,
      niveau: $(this).val(),
    }),
    success(data) {

    },
  })
})

if (document.getElementById('ppn')) {
  document.getElementById('ppn').addEventListener('change', (e) => {
    console.log('chance')
    document.location.href = Routing.generate('administration_apc_referentiel_index', { diplome: e.target.dataset.diplome, ppn: e.target.value })
  })
}
