/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/public/src/assets/js/script/plugins/myQuill.js
 * @author     David Annebicque
 * @project intranetv3
 * @date 30/07/2019 08:40
 * @lastUpdate 30/07/2019 08:39
 */

function loadQuill ($id) {
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
    placeholder: 'Composez le corps du message...',
    theme: 'snow'
  }
  let quill = new Quill('#text_' + $id, options)
}
