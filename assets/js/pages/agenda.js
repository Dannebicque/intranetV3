// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/agenda.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/06/2021 08:28

import reloadQv from '../app' //todo: a modifier, pour n'importer que la classe
// import '../../vendor/datatables'
import {dataTableLangueFr} from '../lang/fr'

$(document).on('change', '#chronologiqueMatiere', function () {
  $('#afficheChronologique').empty().load(Routing.generate('agenda_qv_previ', {previ: $(this).val()}), (function () {


    $('#qvAgendaDatatable').DataTable({
      'language': dataTableLangueFr,
      'pageLength': 25
    })


    reloadQv()
  }))
})

