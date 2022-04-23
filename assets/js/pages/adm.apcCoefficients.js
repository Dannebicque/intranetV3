// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.apcCoefficients.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 03/01/2022 13:35

import {post} from '../fetch'

// const tableau = document.querySelector('#mcc-table')
// const thead = document.querySelector('#mcc-table thead')
// console.log(thead)
// tableau.removeChild(thead)


// let tabColumns = []
// const columns = document.querySelectorAll('#mcc-table tbody tr:first-child td')
// columns.forEach(column => {
//   tabColumns[column.cellIndex] = column
//   console.log(column.getBoundingClientRect().width)
//   console.log(column.getBoundingClientRect())
// })
//
// const header = document.createElement('div')
// const elt = document.createElement('table')
// elt.classList.add('table', 'table-bordered')
// const table = header.appendChild(elt)
// table.appendChild(thead)
//
// tableau.parentNode.insertBefore(table, tableau);
//
// const columnsHeader = tableau.querySelectorAll('thead tr:last-child th')
// columnsHeader.forEach(column => {
//   console.log(column)
//   column.clientWidth = tabColumns[column.cellIndex].clientWidth
// })

function updateRapportsSaeRessource (comp, semestre) {
  const cells = document.querySelectorAll("[data-competence='" + comp + "']")
  let total = 0
  let totalSae = 0
  cells.forEach(cell => {
    if (cell.dataset.semestre === semestre) {
      total += parseInt(cell.value)
      if (cell.dataset.sae) {
        totalSae += parseInt(cell.value)
      }
    }
  })
  const zonePourcentage = document.querySelector('#rapport_sae_comp_' + comp)
  document.querySelector('#total_comp_' + comp).innerText = total
  document.querySelector('#total_sae_comp_' + comp).innerText = totalSae
  let pourcentage = totalSae / total * 100
  zonePourcentage.innerText = pourcentage.toFixed(2) + "%"
  if (pourcentage > 60 || pourcentage < 40) {
    zonePourcentage.classList.add('bg-danger')
    zonePourcentage.classList.remove('bg-success')
  } else {
    zonePourcentage.classList.remove('bg-danger')
    zonePourcentage.classList.add('bg-success')
  }
}

function updateTotalMatiere (matiere) {
  console.log(matiere)
  const cells = document.querySelectorAll("[data-matiere='" + matiere + "']")
  let total = 0
  cells.forEach(cell => {
    if (cell.value !== '') {
      total += parseInt(cell.value)
    }
  })
  document.querySelector('#nb_' + matiere).innerText = total
}

document.querySelectorAll('.mcc').forEach((element) => {
  element.addEventListener('blur', (elem) => {
    console.log(elem)
    let matiere = elem.target.dataset.matiere
    console.log(matiere)
    updateTotalMatiere(matiere)
  })
})

document.querySelectorAll('.changeCoefficientSae').forEach((element) => {
  element.addEventListener('blur', (elem) => {
    post(Routing.generate('administration_apc_referentiel_formation_ajax', {
      id: element.dataset.matiere,
      competence: element.dataset.competence,
      type: 'sae'
    }), {
      value: element.value
    }).then(() => {
      updateRapportsSaeRessource(element.dataset.competence, element.dataset.semestre)
    })
  })
})

document.querySelectorAll('.changeCoefficientRessource').forEach((element) => {
  element.addEventListener('blur', (elem) => {
    post(Routing.generate('administration_apc_referentiel_formation_ajax', {
      id: element.dataset.matiere,
      competence: element.dataset.competence,
      type: 'ressource'
    }), {
      value: element.value
    }).then(() => {
      updateRapportsSaeRessource(element.dataset.competence, element.dataset.semestre)
    })
  })
})
