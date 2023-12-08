import {Controller} from '@hotwired/stimulus'

export default class extends Controller {
    static targets = ['bloc_etudiant']

    static values = {
        url: String,
    }

    connect() {

    }

    async toggle(event) {
        console.log(event.detail.semestre)

        this.bloc_etudiantTarget.innerHTML = '';

        const response = await fetch(`${this.urlValue}`)
        this.bloc_etudiantTarget.innerHTML = await response.text();
    }

}