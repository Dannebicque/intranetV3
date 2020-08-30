// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/quill.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/08/2020 09:37

import '../css/quill.css'

import Quill from 'quill/core'

import Toolbar from 'quill/modules/toolbar'
import Snow from 'quill/themes/snow'

import Bold from 'quill/formats/bold'
import Italic from 'quill/formats/italic'
import Header from 'quill/formats/header'
import $ from 'jquery'


Quill.register({
  'modules/toolbar': Toolbar,
  'themes/snow': Snow,
  'formats/bold': Bold,
  'formats/italic': Italic,
  'formats/header': Header
})


export default Quill

let options = {
  theme: 'snow',
  toolbar: 'full'
}

let toolbarFullOptions = [
  [
    {'header': [1, 2, 3, 4, 5, 6, false]},
    {'size': ['small', false, 'large', 'huge']}
  ],
  ['bold', 'italic'],        // toggled buttons
  [{'color': []}, {'background': []}],          // dropdown with defaults from theme
  [{'header': 1}, {'header': 2}, 'blockquote', 'code-block'],
  [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
  ['link'],
  ['clean']                                         // remove formatting button
]

if (options.toolbar !== undefined) {
  var toolbar = options.toolbar.toLowerCase()
  if (toolbar == 'full') {
    options.modules = {
      //syntax: 'true',
      toolbar: toolbarFullOptions
    }
  }
}

$(document).ready(function () {
  initQuill()
})

$(document).ajaxComplete(function () {
  initQuill()
})

function initQuill () {
  let obj = $('[data-provide="quill"]')
  if (obj.length === 1) {
    new Quill($('[data-provide="quill"]')[0], options)
  }
}


