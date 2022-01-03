// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.apcCoefficients.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 03/01/2022 13:35

import {post} from '../fetch'

document.querySelectorAll('.changeCoefficientSae').forEach((element) => {
  element.addEventListener('blur', (elem) => {
    post(Routing.generate('administration_apc_referentiel_formation_ajax', {
      id: element.dataset.matiere,
      competence: element.dataset.competence,
      type: 'sae'
    }), {
      value: element.value
    })
  })
})
