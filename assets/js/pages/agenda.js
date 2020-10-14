// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/agenda.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 14/10/2020 10:25

import reloadQv from '../app'

$(document).on('change', '#chronologiqueMatiere', function () {
  $('#afficheChronologique').empty().load(Routing.generate('agenda_qv_previ', {previ: $(this).val()}), (function () {
    reloadQv()
  }))
})

