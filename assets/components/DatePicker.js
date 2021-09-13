// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/components/DatePicker.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/09/2021 20:59

import flatpickr from 'flatpickr'
import 'flatpickr/dist/l10n/fr.js'

export default class DatePicker extends HTMLInputElement {

    constructor () {
        super()
        if (this.dataset.options) {
            this.options = JSON.parse(this.dataset.options)
        } else {
            this.options = []
            this.options['dateFormat'] = 'd/m/Y'
        }
        this.options['locale'] = da.LANG
    }

    connectedCallback () {
        this.flatpickr = flatpickr(this, this.options)
    }
}
