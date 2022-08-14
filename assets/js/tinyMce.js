// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/tinyMce.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 22/06/2022 16:30

import tinymce from 'tinymce/tinymce.min'
import 'tinymce/plugins/lists/plugin.min'
import 'tinymce/icons/default/icons.min'
// // A theme is also required
import 'tinymce/themes/silver/theme.min'
import '../vendor/tinyMceLang/fr_FR'

window.addEventListener('load', () => { // le dom est chargé
  if (document.getElementsByClassName('tinyMce').length > 0) {
    tinymce.init({
      selector: '.tinyMce',
      height: 300,
      menubar: false,
      plugins: 'lists',
      entity_encoding: 'raw',
      encoding: 'UTF-8',
      language: 'fr_FR',
      content_css: 'default',
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat',
    })
  }
})
