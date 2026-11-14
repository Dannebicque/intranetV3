// Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/lookup-search-controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 14/11/2026 21:42

import {Controller} from '@hotwired/stimulus'
import {useDebounce} from 'stimulus-use'

export default class extends Controller {
  element = null

  static targets = ['reponses']

  static values = {
    url: String,
  }

  static debounces = ['search'];

  connect() {
    useDebounce(this);
    this.element = document.getElementById('lookup-full')
  }

  openModal() {
    this.element.classList.add('reveal')
    document.getElementById('sidebar').classList.add('d-none')
    document.body.classList.add('no-scroll')
    this.element.querySelector('.lookup-form input').focus()
  }

  closeModal() {
    document.getElementById('sidebar').classList.remove('d-none')
    document.body.classList.remove('no-scroll')
    this.element.classList.remove('reveal')
  }

  onSearchInput(event) {
    const value = event && event.currentTarget ? event.currentTarget.value : '';
    this.search(value);
  }

  async search(searchTerm) {
    const rawTerm = typeof searchTerm === 'string' ? searchTerm.trim() : '';

    if (rawTerm.length < 3) {
      this.reponsesTarget.innerHTML = `
        <div class="row">
          <div class="col-12">
            <div class="alert alert-info border border-2 d-flex align-items-center mb-2 mt-2" role="alert">
              <div class="bg-info me-3 icon-item"><span class="fas fa-info-circle text-white fs-3"></span></div>
              <div class="mb-0 flex-1"><p>Saisir au moins 3 caractères</p></div>
            </div>
          </div>
        </div>
      `;
      return;
    }

    // Neutraliser les chevrons et limiter la taille
    const cleanTerm = rawTerm.replace(/[<>]/g, '').trim().substring(0, 100);
    if (cleanTerm.length < 3) {
      return;
    }

    const params = new URLSearchParams({
      q: cleanTerm,
    });

    try {
      const response = await fetch(`${this.urlValue}?${params.toString()}`);
      if (!response.ok) {
        return;
      }
      const html = await response.text();

      // Sécurité : parser le HTML et supprimer tout script avant injection
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      doc.querySelectorAll('script').forEach((el) => el.remove());
      this.reponsesTarget.innerHTML = doc.body.innerHTML;
    } catch (e) {
      // Ignorer silencieusement les erreurs d'annulation réseau
    }
  }
}
