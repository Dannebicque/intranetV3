// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.absences.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/04/2024 21:26

import Routing from 'fos-router'
import { get } from '../fetch'

document.querySelector('#justifier_etudiant').addEventListener('change', function () {
  const url = Routing.generate('administration_absences_liste_absence_etudiant', { etudiant: this.value })

  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('listeJustifie').innerHTML = data
    })
});

document.querySelectorAll('.checkAbsence').forEach((element) => {
  element.addEventListener('click', function () {
    const absence = this.getAttribute('data-absence')
    const etat = this.checked ? 1 : 0
    const url = Routing.generate('administration_absences_justifie', { absence, etat })

    get(url)
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(`#ligne_${absence}`)
          .classList.remove('bg-pale-warning', 'bg-pale-success')
        document.querySelector(`#ligne_${absence}`)
          .classList.add(data ? 'bg-pale-success' : 'bg-pale-warning')
      })
  });
});
