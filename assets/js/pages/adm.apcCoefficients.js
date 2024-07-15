// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.apcCoefficients.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2024 17:37

import Routing from 'fos-router'
import { post } from '../fetch'

function updateRapportsSaeRessource(comp, semestre) {
  const cells = document.querySelectorAll(`[data-competence='${comp}']`)
  let total = 0
  let totalSae = 0
  cells.forEach((cell) => {
    if (cell.dataset.semestre === semestre) {
      total += parseInt(cell.value, 10)
      if (cell.dataset.sae) {
        totalSae += parseInt(cell.value, 10)
      }
    }
  })
  const zonePourcentage = document.querySelector(`#rapport_sae_comp_${comp}`)
  document.querySelector(`#total_comp_${comp}`).innerText = total
  document.querySelector(`#total_sae_comp_${comp}`).innerText = totalSae
  const pourcentage = (totalSae / total) * 100
  zonePourcentage.innerText = `${pourcentage.toFixed(2)}%`
  if (pourcentage > 60 || pourcentage < 40) {
    zonePourcentage.classList.add('bg-danger')
    zonePourcentage.classList.remove('bg-success')
  } else {
    zonePourcentage.classList.remove('bg-danger')
    zonePourcentage.classList.add('bg-success')
  }
}

function updateTotalMatiere(matiere) {
  const cells = document.querySelectorAll(`[data-matiere='${matiere}']`)
  let total = 0
  cells.forEach((cell) => {
    if (cell.value !== '') {
      total += parseInt(cell.value, 10)
    }
  })
  document.querySelector(`#nb_${matiere}`).innerText = total
}

document.querySelectorAll('.mcc').forEach((element) => {
  element.addEventListener('blur', (elem) => {
    const { matiere } = elem.target.dataset
    updateTotalMatiere(matiere)
  })
})

document.querySelectorAll('.changeCoefficientSae').forEach((element) => {
  element.addEventListener('blur', () => {
    post(Routing.generate('administration_apc_referentiel_formation_ajax', {
      id: element.dataset.matiere,
      competence: element.dataset.competence,
      type: 'sae',
    }), {
      value: element.value,
    }).then(() => {
      updateRapportsSaeRessource(element.dataset.competence, element.dataset.semestre)
    })
  })
})

document.querySelectorAll('.changeCoefficientRessource').forEach((element) => {
  element.addEventListener('blur', () => {
    post(Routing.generate('administration_apc_referentiel_formation_ajax', {
      id: element.dataset.matiere,
      competence: element.dataset.competence,
      type: 'ressource',
      parcours: element.dataset.parcours ?? 0,
    }), {
      value: element.value,
    }).then(() => {
      updateRapportsSaeRessource(element.dataset.competence, element.dataset.semestre)
    })
  })
})

document.querySelectorAll('.changeNbNotesSae').forEach((element) => {
  element.addEventListener('blur', () => {
    post(Routing.generate('administration_apc_referentiel_formation_nb_notes_ajax', {
      id: element.dataset.matiere,
      type: 'sae',
    }), {
      value: element.value,
    })
  })
})

document.querySelectorAll('.changeNbNotesRessource').forEach((element) => {
  element.addEventListener('blur', () => {
    post(Routing.generate('administration_apc_referentiel_formation_nb_notes_ajax', {
      id: element.dataset.matiere,
      type: 'ressource',
    }), {
      value: element.value,
    })
  })
})
