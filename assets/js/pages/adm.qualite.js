// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.qualite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 22/06/2022 16:30

import { post } from '../fetch'
import { addCallout } from '../util'

document.querySelectorAll('.relanceIndividuelle').forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    post(e.currentTarget.href).then(() => {
      addCallout('Relance envoyée', 'success')
    })
  });
});
