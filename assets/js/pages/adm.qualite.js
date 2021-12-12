// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.qualite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/12/2021 09:43

import {post} from '../fetch'
import {addCallout} from '../util'

document.querySelectorAll('.relanceIndividuelle').forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.preventDefault()
      post(e.currentTarget.href).then(() => {
        addCallout( 'Relance envoyée','success')
      })
    });
});
