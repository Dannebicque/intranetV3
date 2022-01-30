// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/components/Toast.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/10/2021 13:06

import {Toast as ToastBs} from 'bootstrap'

class Toast {

  createAndShow (type, text, title = null, options = {}) {
    let html = '<div class="position-fixed top-0 end-0 p-3" style="z-index:1000">\n' +
      '<div class="toast align-items-center text-white bg-' + type + ' border-0" role="alert" aria-live="assertive" aria-atomic="true">\n' +
      '  <div class="d-flex">\n' +
      '    <div class="toast-body">\n' +
      text + '\n'
    '    </div>\n' +
    '    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close">X</button>\n' +
    '  </div>\n' +
    '</div>\n' +
    '</div>'

    const div = document.createElement('div')
    div.innerHTML = html
    div.children[0].addEventListener('hidden.bs.toast', function (elem) {
      elem.currentTarget.remove() //supprimer le code HTML après l'event.
    })
    document.body.append(div.children[0])

    this.show(type, text, title, options)
  }


  show (type, text, title = null, options = {}) {
    //options = {...this.defaultOptions, ...options}
//todo: Utiliser le type Alerte https://gouvfr.atlassian.net/wiki/spaces/DB/pages/736362500/Alertes+-+Alerts
    //options['className'] += ' toast-' + type

    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    toastElList.map(function (toastEl) {
      var tst = new ToastBs(toastEl, options)
      tst.show()
    })
  }

  error (text, title = null, options = {}) {
    this.createAndShow('danger', text, title, options)
  }

  warning (text, title = null, options = {}) {
    this.createAndShow('warning', text, title, options)
  }

  success (text, title = null, options = {}) {
    this.createAndShow('success', text, title, options)
  }

  info (text, title = null, options = {}) {
    this.createAndShow('info', text, title, options)
  }

}

export default new Toast()
