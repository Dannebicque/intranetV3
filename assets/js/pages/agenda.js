// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/agenda.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import reloadQv from '../app' // todo: a modifier, pour n'importer que la classe
import Routing from 'fos-router'

$(document).on('change', '#chronologiqueMatiere', function () {
  $('#afficheChronologique').empty().load(Routing.generate('agenda_qv_previ', { previ: $(this).val() }), (() => {
    reloadQv()
  }))
})
