// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/components/Toast.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/04/2024 10:28

import { Toast as ToastBs } from 'bootstrap'

class Toast {
  createAndShow(type, text, icone, title = null, options = {}) {
    const html = `<div class="position-fixed top-0 end-0 p-3" style="z-index:1000">
                      <div class="my_toast alert alert-${type} border-2 d-flex align-items-center" role="alert">
                        <div class="bg-${type} me-3 icon-item"><span class="fas ${icone} text-white fs-3"></span></div>
                            <p class="mb-0 flex-1">${text}</p>
                            <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                       </div>
                     </div>
                  </div>`

    const div = document.createElement('div')
    div.innerHTML = html
    div.children[0].addEventListener('hidden.bs.toast', () => {
      // elem.currentTarget.remove() // supprimer le code HTML après l'event.
    })
    document.body.append(div.children[0])

    this.show(type, text, title, options)
  }

  show(type, text, title = null, options = {}) {
    const toastElList = [].slice.call(document.querySelectorAll('.my_toast'))
    toastElList.map((toastEl) => {
      const tst = new ToastBs(toastEl, options)
      tst.show()
    })
  }

  error(text, title = null, options = {}) {
    this.createAndShow('danger', text, 'fa-times-circle', title, options)
  }

  warning(text, title = null, options = {}) {
    this.createAndShow('warning', text, 'fa-exclamation-circle', title, options)
  }

  success(text, title = null, options = {}) {
    this.createAndShow('success', text, 'fa-check-circle', title, options)
  }

  info(text, title = null, options = {}) {
    this.createAndShow('info', text, 'fa-info-circle', title, options)
  }
}

export default new Toast()
