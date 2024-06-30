// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.sous-commission.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/06/2024 19:06
import $ from 'jquery'
import Routing from 'fos-router'
import { load } from '../fetch'

$(document).ready(() => {
  document.getElementById('btnSsCom').addEventListener('click', async (e) => {
    const etudiant = document.getElementById('ssComEtudiant').value
    const semestre = document.getElementById('ssComSemestre').value
    const annee = document.getElementById('ssComAnnee').value
    if (etudiant !== '' && semestre !== '') {
      // document.getElementById('ssComTitre').innerHTML = 'Résultats du semestre ' + semestre
      await load(Routing.generate('administration_sous_commission_mise_a_jour_calcul', {
        etudiant,
        semestre,
        anneeUniversitaire: annee,
      }), document.getElementById('ssComContent'))
    }
  })
})
