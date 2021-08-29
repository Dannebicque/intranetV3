// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/components/DatePicker.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/08/2021 21:50

import flatpickr from 'flatpickr'
import 'flatpickr/dist/l10n/fr.js'

export default class DatePicker extends HTMLInputElement {

    constructor () {
        super()
        console.log(flatpickr)
        this.options = JSON.parse(this.dataset.options)
        this.options['locale'] = da.LANG
    }

    connectedCallback () {
        this.flatpickr = flatpickr(this, this.options)
    }
}

