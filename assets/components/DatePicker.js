// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/components/DatePicker.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/09/2021 19:12

import flatpickr from 'flatpickr'
import 'flatpickr/dist/l10n/fr.js'

export default class DatePicker extends HTMLInputElement {

    constructor () {
        super()
        console.log(flatpickr)
        console.log(typeof this.dataset.options)
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

