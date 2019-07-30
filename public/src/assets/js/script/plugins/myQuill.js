/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/public/src/assets/js/script/plugins/myQuill.js
 * @author     David Annebicque
 * @project intranetv3
 * @date 30/07/2019 08:40
 * @lastUpdate 30/07/2019 08:39
 */

function loadQuill ($id) {
  /*const toolbarFullOptions = [
    [
      // {'font': []},
      {'header': [1, 2, 3, 4, 5, 6, false]}
      //  {'size': ['small', false, 'large', 'huge']}
    ],
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    //  [{'color': []}, {'background': []}],          // dropdown with defaults from theme
    // [{'script': 'sub'}, {'script': 'super'}],
    [{'header': 1}, {'header': 2}, 'blockquote', 'code-block'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    [{'direction': 'rtl'}, {'align': []}],        // text direction
    ['link', 'image', 'video'],
    ['clean'],
    [{'placeholder': $options}]// remove formatting button
  ]*/

  const options = {
    debug: 'info',
    modules: {
      toolbar: {
        container: '#toolbar_' + $id,
        handlers: {
          'customsfields': function (value) {
            /* do something with lang */
            console.log('--' + value)
            if (value) {
              const cursorPosition = this.quill.getSelection().index
              this.quill.insertText(cursorPosition, value)
              this.quill.setSelection(cursorPosition + value.length)
            }
          }
        }
      },

    },
    placeholder: 'Compose an epic...',
    theme: 'snow'
  }
  let quill = new Quill('#text_' + $id, options)
}
