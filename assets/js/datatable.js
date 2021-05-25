// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/datatable.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/05/2021 14:06

import {dataTableLangueFr} from './lang/fr'

$(document).ready(function () {
  $('[data-provide="datatables"]').DataTable({
    retrieve: true,
    'language': dataTableLangueFr
  })
})
