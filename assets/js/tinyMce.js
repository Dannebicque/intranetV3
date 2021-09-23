// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/tinyMce.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/09/2021 10:24

import tinymce from 'tinymce/tinymce.min'
import 'tinymce/plugins/lists/plugin.min'
import 'tinymce/icons/default/icons.min'
// // A theme is also required
import 'tinymce/themes/silver/theme.min'
import '../vendor/tinyMceLang/fr_FR'

window.addEventListener('load', function () { //le dom est chargé
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
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat'
    })
  }
})
