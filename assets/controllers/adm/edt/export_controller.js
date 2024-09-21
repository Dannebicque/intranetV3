// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/adm/edt/export_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/09/2024 17:48

import { Controller } from '@hotwired/stimulus'
import Routing from 'fos-router'
import JsonResponse from '../../../js/JsonResponse'

export default class extends Controller {
  static values = {
    urlSendMail: String,
    urlGeneratePdf: String,
  }

  async generatePdf(e) {
    const elt = e.currentTarget
    await fetch(e.params.url)
      .then((response) => {
        JsonResponse(response)
        // mise à jour de la zone TD s'il n'y avait pas de PDF et donc pas de bouton
        document.querySelector(`#pdf_${e.params.profId}`).innerHTML = ` <div class="d-grid">
                                    <a href="${Routing.generate('administration_edt_download_one', { personnel: e.params.profId })}"
                                       class="btn btn-info d-block"
                                       target="_blank"><i class="fas fa-download"></i></a>
                                    </div>`

        document.querySelector(`#mail_${e.params.profId}`).innerHTML = `
                <button href=""
                   class="btn btn-success"
                   data-adm--edt--export-url-param="${Routing.generate('administration_edt_send_one', { personnel: e.params.profId })}"
                    data-action="click->adm--edt--export#sendEdt"
                   title="Envoyer le PDF">
                   <i class="fa fa-envelope"></i>
                   </button>
            `
      })
  }

  async sendEdt(e) {
    await fetch(e.params.url)
      .then((response) => {
        JsonResponse(response)
      })
  }
}
