// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/agenda.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/09/2021 12:08

import reloadQv from '../app' //todo: a modifier, pour n'importer que la classe

$(document).on('change', '#chronologiqueMatiere', function () {
  $('#afficheChronologique').empty().load(Routing.generate('agenda_qv_previ', {previ: $(this).val()}), (function () {
    reloadQv()
  }))
})

