// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.justificatifs.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/07/2024 08:30
import Routing from 'fos-router'
import { addCallout } from '../util'

// todo: faire en stimulus sinon ne fonctionne plus

document.querySelectorAll('.justificatif-accepte').forEach((element) => {
  console.log('justificatif-accepte')
  element.addEventListener('click', (e) => {
    e.preventDefault()
    const justificatif = e.getAttribute('data-justificatif')
    fetch(Routing.generate('administration_absence_justificatif_change_etat', { uuid: justificatif, etat: 'A' }), {
      method: 'POST',
    })
      .then((response) => {
        if (!response.ok) {
          addCallout('Une erreur est survenue !', 'danger')
        }
        return response.json()
      })
      .then(() => {
        const bx = document.querySelector(`.bx_${justificatif}`)
        const parent = bx.parentElement
        bx.remove()

        let html = `<a href="#" class="btn btn-success btn-outline bx_${justificatif}">Demande Acceptée</a>`
        html += `<button data-justificatif="${justificatif}" class="btn btn-warning btn-outline btn-square justificatif-annuler bx_${justificatif}" data-provide="tooltip" data-placement="bottom" title="Annuler"><i class="fas fa-rotate-left"></i></button>`

        parent.insertAdjacentHTML('afterbegin', html)
        addCallout('Justificatif d\'absence validé !', 'success')
      })
      .catch(() => {
        addCallout('Une erreur est survenue !', 'danger')
      })
  })
})

// document.addEventListener('click', function (e) {
//   if (e.target.matches('.justificatif-refuse')) {
document.querySelectorAll('.justificatif-refuse').forEach((element) => {
  element.addEventListener('click', (e) => {
    const justificatif = e.target.getAttribute('data-justificatif')
    const url = Routing.generate('administration_absence_justificatif_change_etat', { uuid: justificatif, etat: 'R' })

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Network response was not ok')
      })
      .then((data) => {
        const bx = document.querySelector(`.bx_${justificatif}`)
        const parent = bx.parentNode

        bx.remove()

        const html = document.createElement('a')

        html.setAttribute('href', '#')
        html.className = `btn btn-warning btn-outline bx_${justificatif}`
        html.innerHTML = 'Demande Refusée'
        parent.prepend(html)

        const button = document.createElement('button')
        button.setAttribute('data-justificatif', justificatif)
        button.className = `btn btn-danger btn-outline btn-square justificatif-annuler bx_${justificatif}`
        button.setAttribute('data-provide', 'tooltip')
        button.setAttribute('data-placement', 'bottom')
        button.setAttribute('title', 'Annuler')
        const i = document.createElement('i')
        i.className = 'fas fa-rotate-left'
        button.appendChild(i)

        parent.prepend(button)

        addCallout('Justificatif d\'absence refusé !', 'success')
      })
      .catch(() => {
        addCallout('Une erreur est survenue !', 'danger')
      })
  })
})

document.querySelectorAll('.justificatif-annuler').forEach((element) => {
  element.addEventListener('click', (e) => {
    const { justificatif } = e.target.dataset
    fetch(Routing.generate('administration_absence_justificatif_change_etat', { uuid: justificatif, etat: 'D' }))
      .then((response) => response.json())
      .then(() => {
        const bx = document.querySelector(`.bx_${justificatif}`)
        const parent = bx.parentElement
        bx.remove()
        const html = `<a href="#"
                class="btn btn-success btn-outline btn-square justificatif-accepte bx_${justificatif}" data-provide="tooltip"
                data-justificatif="${justificatif}"
                data-placement="bottom" title="atitle.accepter.le.justificatif">
                <i class="fas fa-check"></i> Accepter</a> 
                <a href="#"
                class="btn btn-danger btn-outline btn-square justificatif-refuse bx_${justificatif}" data-provide="tooltip"
                data-justificatif="${justificatif}"
                data-placement="bottom" title="atitle.refuser.le.justificatif">
                <i class="fas fa-ban"></i> Refuser
                </a>`
        parent.insertAdjacentHTML('afterbegin', html)
        addCallout('Etat du justificatif d\'absence annulé !', 'success')
      })
      .catch(() => {
        addCallout('Une erreur est survenue !', 'danger')
      })
  })
})

// $(document).on('click', '.justificatif-refuse', function (e) {
//   const justificatif = $(this).data('justificatif')
//   $.ajax({
//     url: Routing.generate('administration_absence_justificatif_change_etat', { uuid: justificatif, etat: 'R' }),
//     success(e) {
//       const bx = $(`.bx_${justificatif}`)
//       const parent = bx.parent()
//       bx.remove()
//       let html = `<a href="#" class="btn btn-warning btn-outline bx_${justificatif}">Demande Refusée</a>`
//       html = `${html}<button data-justificatif="${justificatif}"
//         class="btn btn-danger btn-outline btn-square justificatif-annuler bx_${justificatif}" data-provide="tooltip" data-placement="bottom"
//         title="Annuler"><i class="fas fa-rotate-left"></i></button>`
//       parent.prepend(html)
//       addCallout('Justificatif d\'absence refusé !', 'success')
//     },
//     error() {
//       addCallout('Une erreur est survenue !', 'danger')
//     },
//   })
// })

// $(document).on('click', '.justificatif-annuler', function (e) {
//   const justificatif = $(this).data('justificatif')
//   $.ajax({
//     url: Routing.generate('administration_absence_justificatif_change_etat', { uuid: justificatif, etat: 'D' }),
//     success(e) {
//       const bx = $(`.bx_${justificatif}`)
//       const parent = bx.parent()
//       bx.remove()
//       const html = `<a href="#"
//         class="btn btn-success btn-outline btn-square justificatif-accepte bx_${justificatif}" data-provide="tooltip"
//         data-justificatif="${justificatif}"
//         data-placement="bottom" title="atitle.accepter.le.justificatif">
//         <i class="fas fa-check"></i> Accepter</a>
//         <a href="#"
//            class="btn btn-danger btn-outline btn-square justificatif-refuse bx_${justificatif}" data-provide="tooltip"
//            data-justificatif="${justificatif}"
//            data-placement="bottom" title="atitle.refuser.le.justificatif">
//            <i class="fas fa-ban"></i> Refuser
//         </a>`
//       parent.prepend(html)
//       addCallout('Etat du justificatif d\'absence annulé !', 'success')
//     },
//     error(e) {
//       addCallout('Une erreur est survenue !', 'danger')
//     },
//   })
// })
