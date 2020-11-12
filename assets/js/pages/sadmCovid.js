// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/sadmCovid.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/11/2020 15:19

import '../../vendor/datatables'
import {dataTableLangueFr} from '../lang/fr'

$(document).ready(function () {
  $('[data-provide="datatables"]').DataTable({
    retrieve: true,
    'language': dataTableLangueFr,
    'order': [[0, 'desc'], [1, 'asc']]
  })
})
