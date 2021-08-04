// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/sadm.enquete.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/08/2021 08:02

import {post} from '../fetch'
import {addCallout} from '../util'

window.addEventListener('load', function () {

  document.querySelectorAll('.validConfiguration').forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault()
      let inputs = document.getElementsByName('config_' + e.target.dataset.section + '[]')
      let previs = []
      inputs.forEach(function (input) {

        if (input.checked == true) {
          previs.push(input.value)
        }
      })

      $.ajax({
        url: Routing.generate('administratif_enquete_config_ajax_save', {section: e.target.dataset.section}),
        data: {
          previs: previs
        },
        method: 'POST',
        success: function () {
          console.log('ok')
        }
      })
    })
  })

  document.querySelectorAll('.deverouiller').forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault()
      console.log(e)
      const id = e.target.dataset.id
      post(Routing.generate('administratif_enquete_etudiant_deverouiller', {questionnaire: id}))
        .then(() => {
          document.getElementById('termine_' + id).innerHTML = 'En cours'
          document.getElementById('valide_' + id).innerHTML = 'En cours'
          addCallout('Questionnaire dévérouillé avec succès.', 'success')
        }).catch(() => {
        addCallout('Erreur lors de la modification du questionnaire.', 'error')
      })
    })
  })
})


