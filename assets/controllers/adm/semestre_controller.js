import {Controller} from '@hotwired/stimulus'

export default class extends Controller {
    static targets = ['semestreModalZone']

    static values = {
        url: String,
        urlSave: String,
    }

    connect() {
        console.log('Hello from semestre controller')
    }

    async toggle(event) {
        console.log('click')
        const _value = event.currentTarget.value
        const actif = event.currentTarget.dataset.actif

        const params = new URLSearchParams({
            semestre: _value,
            actif: actif,
        })
        const response = await fetch(`${this.urlValue}`)
        // Met à jour la vue avec les données du semestre mis à jour.
        this.updateView(_value)
    }

    updateView(semestre) {
        console.log('updateView')
        // Sélectionne les éléments nécessaires dans le DOM.
        const semestreActifElement = this.element.querySelector('.semestre-active');
        const semestreActifBtn = this.element.querySelector('.semestre-btn-active');

        // Met à jour le contenu de l'élément avec les nouvelles valeurs.
        if (semestreActifElement.textContent === 'Actif') {
            semestreActifElement.textContent = 'Inactif';
            semestreActifElement.classList.remove('bg-success');
            semestreActifElement.classList.add('bg-danger');
            semestreActifBtn.classList.remove('fa-eye-slash');
            semestreActifBtn.classList.add('fa-eye');

        } else {
            semestreActifElement.textContent = 'Actif';
            semestreActifElement.classList.remove('bg-danger');
            semestreActifElement.classList.add('bg-success');
            semestreActifBtn.classList.remove('fa-eye');
            semestreActifBtn.classList.add('fa-eye-slash');
        }
    }
}