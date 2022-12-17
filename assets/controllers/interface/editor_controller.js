// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/interface/editor_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 17/12/2022 09:34

import { Controller } from '@hotwired/stimulus'
import tinymce from 'tinymce/tinymce.min'
import 'tinymce/plugins/lists/plugin.min'
import 'tinymce/icons/default/icons.min'
// // A theme is also required
import 'tinymce/themes/silver/theme.min'
import '../../vendor/tinyMceLang/fr_FR'

export default class extends Controller {
  connect() {
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
}
