// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/sadm.enquete.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import { post } from '../fetch'
import { addCallout } from '../util'
import Routing from 'fos-router'

window.addEventListener('load', () => {
  document.querySelectorAll('.validConfiguration').forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault()
      const inputs = document.getElementsByName(`config_${e.target.dataset.section}[]`)
      const previs = []
      inputs.forEach((input) => {
        if (input.checked == true) {
          previs.push(input.value)
        }
      })

      $.ajax({
        url: Routing.generate('administratif_enquete_config_ajax_save', { section: e.target.dataset.section }),
        data: {
          previs,
        },
        method: 'POST',
        success() {
        },
      })
    })
  })

  document.querySelectorAll('.deverouiller').forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault()
      const { id } = e.target.dataset
      post(Routing.generate('administratif_enquete_etudiant_deverouiller', { questionnaire: id }))
        .then(() => {
          document.getElementById(`termine_${id}`).innerHTML = 'En cours'
          document.getElementById(`valide_${id}`).innerHTML = 'En cours'
          addCallout('Questionnaire dévérouillé avec succès.', 'success')
        }).catch(() => {
          addCallout('Erreur lors de la modification du questionnaire.', 'error')
        })
    })
  })
})
