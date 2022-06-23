// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.sous-commission.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 22/06/2022 17:34
import $ from 'jquery'
import { load } from '../fetch'

$(document).ready(() => {
  document.getElementById('btnSsCom').addEventListener('click', async (e) => {
    console.log('click--')
    const etudiant = document.getElementById('ssComEtudiant').value
    const semestre = document.getElementById('ssComSemestre').value
    const annee = document.getElementById('ssComAnnee').value
    console.log(etudiant, semestre)
    if (etudiant !== '' && semestre !== '') {
      // document.getElementById('ssComTitre').innerHTML = 'Résultats du semestre ' + semestre
      await load('administration_sous_commission_mise_a_jour_calcul', {
        etudiant,
        semestre,
        anneeUniversitaire: annee,
      }, document.getElementById('ssComContent'))
    }
  })
})
