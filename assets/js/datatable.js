// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/datatable.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 22/07/2020 15:10

import '../vendor/datatables'
import {dataTableLangueFr} from './lang/fr'

$(document).ready(function () {
  $('[data-provide="datatables"]').DataTable({
    retrieve: true,
    'language': dataTableLangueFr
  })
})
