// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/components/Toast.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/08/2021 14:42

import Toastify from 'toastify-js'


class Toast {

  defaultOptions = {
    close: true,
    duration: 3000,
    className: 'toast',
    escapeMarkup: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true
  }

  show (type, text, title = null, options = {}) {
    options = {...this.defaultOptions, ...options}

    options['className'] += ' toast-' + type

    let html = '<div class="toast-wrapper">'
    if (title) {
      html += '<div class="toast-head">' + title + '</div>'
    }
    html += '<div class="toast-body">' + text + '</div>'
    html += '</div>'

    options['text'] = html
    Toastify(options).showToast()
  }

  error (text, title = null, options = {}) {
    this.show('error', text, title, options)
  }

  warning (text, title = null, options = {}) {
    this.show('warning', text, title, options)
  }

  success (text, title = null, options = {}) {
    this.show('success', text, title, options)
  }

  info (text, title = null, options = {}) {
    this.show('info', text, title, options)
  }

}

export default new Toast()
